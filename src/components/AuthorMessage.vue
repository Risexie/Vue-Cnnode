<template>
<div>
  <b-card header="作者">
    <b-img :src="post.avatar_url">{{ post.loginname }}</b-img>
    <p>积分： {{ post.score}}</p>
  </b-card>
  <b-card header="作者的其他话题" v-for="item in post" v-bind:key="item.id">
    <router-link :to="{ path:'post',query:{id:item.recent_topics.id}}"></router-link>
  </b-card>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "AuthorMessage",
  data() {
    return {
      post: []
    };
  },
  beforeCreate() {
    axios
      .get("https://cnodejs.org/api/v1/user/" + )
      .then(function(response) {
        return response.data.data;
      })
      .then(function(data) {
        this.post = data;
      });
  }
};
</script>
<style scoped>
</style>


