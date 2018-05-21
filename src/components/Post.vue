<template>
<div>
<Header></Header>
<b-container>
    <b-row>
      <!-- 左侧文章信息 -->
      <b-col md="9">
        <b-list-group class="topic">
          <b-list-group-item>
          <h1>{{ post.title}}</h1>
        <p>发布于{{ post.create_at}} 作者 {{ post.author}},{{ post.visit_count}} 次浏览</p>
        <br>
        <p v-html="post.content"></p>
        </b-list-group-item>
        </b-list-group>
        <b-list-group class="replay">
          <b-list-group-item variatn="dark"> {{ post.reply_count}} 回复</b-list-group-item>
            <b-list-group-item  v-for="item in post.replies" v-bind:key="item.id" class="item">
                <b-img v-bind:src="item.author.avatar_url" ></b-img> {{ item.author.loginname}} {{ item.create_at}}
                <p v-html="item.content"></p>
            </b-list-group-item>
        </b-list-group>
      </b-col>
      <!-- 右侧作者信息 -->
  
      <b-col md ="3">
      <b-card header="作者">
         <b-img :src="authorMessage.avatar_url">{{ authorMessage.loginname }}</b-img>
         <p>积分： {{ authorMessage.score}}</p>
      </b-card>
      <b-card header="作者的其他话题" v-for="item in authorMessage" v-bind:key="item.id">
         <router-link :to="{ path:'post',query:{id:item.recent_topics.id}}"></router-link>
       </b-card>
      </b-col>
    </b-row>
</b-container>

<Footer></Footer>
</div>
</template>
<script>
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import router from "../router";

export default {
  
  name: "Post",
  data() {
    return {
      post: [],
      authorName:'',
      authorMessage:[],
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    fetchPostData(){    
    axios
      .get("https://cnodejs.org/api/v1/topic/" + this.$route.params.id)
      .then(function(response) {  
        if(response.success == "true"){
          console.log("fetch dada success")
        return response.data.data;
        }else {
          throw new Error('failed to fetch dada')
        }
      })
      .then(function(data) {
        this.post = data;
        this.authorName = data.author.loginname;
      })
      .catch(function(err) {
        alert(err);
      });
    },
     fetchAuthorData() {
    axios
      .get("https://cnodejs.org/api/v1/user/"+ this.authorName)
      .then(function(response) {
        if(response.success == "true"){
          console.log("fetch AuthorData success")
            return response.data.data;
        }else {
          throw new Error('failed to fetch Author data')
        }
      })
      .then(function(data) {
        vm.authorMessage = data;
    });
  },
  },
  mounted(){
    this.fetchPostData();
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
</style>


