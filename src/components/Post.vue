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
        <p>发布于{{ post.create_at}} 作者 {{ post.author.loginname}},{{ post.visit_count}} 次浏览</p>
        <br>
        <p v-html="post.content"></p>
        </b-list-group-item>
        </b-list-group>
        <b-list-group class="replay">
          <b-list-group-item variatn="dark"> {{ post.reply_count}} 回复</b-list-group-item>
            <b-list-group-item  v-for="item in post.replies" v-bind:key="item.id" class="item">
                <b-img v-bind:src="item.author.avatar_url"  ></b-img> {{ item.author.loginname}} {{ item.create_at}}
                <p v-html="item.content"></p>
            </b-list-group-item>
        </b-list-group>
      </b-col>
      <!-- 右侧作者信息 -->
  
      <b-col md ="3" class="author">
      <b-card header="作者" >
         <b-img :src="authorMessage.avatar_url" fluid alt="Responsive image"></b-img>
         <router-link :to="{ name:'Author',params:{ id:authorMessage.loginname}}">{{ authorMessage.loginname }}</router-link>
         <p>积分： {{ authorMessage.score}}</p>
      </b-card>
      <b-card header="作者的其他话题">
        <div v-for="item in authorMessage.recent_topics" v-bind:key="item.id">
          <p>
         <router-link :to="{ name:'Post',params:{ id:item.id }}">{{ item.title }}</router-link>
         </p>
         </div>
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
      authorName: "",
      authorMessage: []
    };
  },
  components: {
    Header,
    Footer
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
            throw new Error("failed to fetch dada");
          }
        })
        .then(data => {
          this.post = data;
          this.authorName = data.author.loginname;
        })
        .catch(function(err) {
          alert(err);
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
            throw new Error("failed to fetch Author data");
          }
        })
        .then(data => {
          this.authorMessage = data;
        });
    }
  },
  mounted() {
    this.fetchPostData();
  },
  watch: {
    authorName: "fetchAuthorData",
    $route(to, from) {
      this.fetchPostData();
    },
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
.author img {
  width: 48px;
  height:48px;
}
.author{
  padding-top:15px;
}
</style>


