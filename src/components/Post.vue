<template>
<div>
<b-container>
    <b-row>
      <!-- 左侧文章信息 -->
      <b-col md="9">
        <b-list-group class="topic">
          <b-list-group-item> 
          <h1>{{ post.title}}</h1><router-link :to="{name:'EditPassage',params:{id:post.id}}" class="EditLink" v-if="authorName == loginName"><b-button variant="primary">编辑文章</b-button></router-link>
        <p>发布于 {{ timeagoInstance(post.create_at) }}   作者  {{ post.author.loginname}} ,  {{ post.visit_count}} 次浏览</p>
        <br>
        <p v-html="post.content" class="vhtml"></p>
        </b-list-group-item>
        </b-list-group>
        <b-list-group class="replay">
          <b-list-group-item variatn="dark"> {{ post.reply_count}} 回复</b-list-group-item>
            <b-list-group-item  v-for="(item,index) in post.replies" :key="item.id" class="item">
              <b-form-row>
                <b-col sm='1' md="1" lg="1">
                <router-link :to="{name:'Author',params:{id:item.author.loginname}}"><b-img :src="item.author.avatar_url"></b-img>
                </router-link>
                </b-col>
                <b-col  sm='11' md='11' lg="11"> 
                <router-link :to="{name:'Author',params:{id:item.author.loginname}}" class="name">{{ item.author.loginname}}</router-link>  {{ index + 1 }} 楼·  {{ timeagoInstance(item.create_at) }}
                <p v-html="item.content" class="vhtml"></p>
                </b-col>
              </b-form-row>
            </b-list-group-item>
        </b-list-group>
      </b-col>
      <!-- 右侧作者信息 -->
  
      <b-col md ="3" class="author">
      <b-card header="作者" >
        <b-form-row>
          <b-col sm="4" md="4" lg="4"> 
         <router-link :to="{ name:'Author',params:{id:authorMessage.loginname}}"><b-img :src="authorMessage.avatar_url" fluid alt="Responsive image"></b-img></router-link>
          </b-col>
          <b-col sm="8" md="8" lg="8">
         <router-link :to="{ name:'Author',params:{ id:authorMessage.loginname}}">{{ authorMessage.loginname }}</router-link>
         <p>积分： {{ authorMessage.score}}</p>
          </b-col>
        </b-form-row>
      </b-card>
      <div class="otherTopic">
      <b-card header="作者的其他话题" >
        <div v-for="item in authorMessage.recent_topics" :key="item.id">
          <p>
         <router-link :to="{ name:'Post',params:{ id:item.id }}" style="font-size:14px;line-height:30px">{{ shortTitle(item.title) }} </router-link>
         </p>
         </div>
       </b-card>
      </div>
      </b-col>
    </b-row>
</b-container>
</div>
</template>
<script>
import axios from "axios";
import router from "../router";
import timeago from "timeago.js";

var timeagoInstance = new timeago();

export default {
  name: "Post",
  data: function() {
    return {
      post: [],
      authorName: "",
      authorMessage: [],
      loginName:'',
    };
  },
  methods: {
    fetchPostData() {
      axios
        .get("https://cnodejs.org/api/v1/topic/" + this.$route.params.id)
        .then(function(response) {
          if (response.data.success) {
            console.log("fetch dada success");
            return response.data.data;
          } else {
            this.$Message.error("无法读取数据");
          }
        })
        .then(data => {
          this.post = data;
          this.authorName = data.author.loginname;
        })
        .catch(function(err) {
          this.$Message.error("读取数据出错");
        });
    },
    fetchAuthorData() {
      axios
        .get("https://cnodejs.org/api/v1/user/" + this.authorName)
        .then(function(response) {
          if (response.data.success) {
            console.log("fetch AuthorData success");
            return response.data.data;
          } else {
            this.$Message.error("无法读取数据");
          }
        })
        .then(data => {
          this.authorMessage = data;
        })
        .catch(err => {
          this.$Message.error("读取数据出错");
        });
    },
    timeagoInstance(time) {
      var timeago_instance = new timeago();
      return timeago_instance.format(time, "zh_CN");
      
    },
    shortTitle(title){
      if(title.length > 16){
        var shortTitle = title.slice(0,16) + '....'
        return shortTitle
      }else {
        return title
      }
    },
    getAuthorName(){
      this.loginName = this.$store.state.loginName;
    }
    
  },
  mounted() {
    this.fetchPostData();
    this.getAuthorName();
  },

  watch: {
    authorName: "fetchAuthorData",
    $route(to, from) {
      this.fetchPostData();
    }
  }
};
</script>
<style  scoped>
.topic {
  padding-top: 15px;
}
.topic p {
  padding-top: 10px;
}
.replay {
  padding-top: 15px;
}
.replay img {
  width: 30px;
  height: 30px;
}
.replay .name {
  color: #666;
}
.author img {
  width: 48px;
  height: 48px;
}
.author {
  padding-top: 15px;
}
.otherTopic {
  padding-top: 15px;
}
.otherTopic a {
  color: #666;
}
.vhtml >>> img {
  width: 100%;
  height: 100%;
}
.vhtml >>> p {
  font-size: 15px;
  line-height: 2em;
  overflow: auto;
}
.EditLink {
  float: right;
}
</style>


