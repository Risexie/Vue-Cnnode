<template>
<div>
    <b-container>
        <b-row>
            <b-col md="9">
             <b-card header="个人主页" class="user">
               <b-img v-bind:src="authorMessage.avatar_url" fluid alt="Responsive image"></b-img> {{ authorMessage.loginame}}
               <p>{{ authorMessage.score}}积分</p>
               <b-link href="https://github.com/">@ {{ authorMessage.githubUsername }}</b-link>
            </b-card>
            <b-list-group class="lastedtopic" >
            <b-list-group-item  variant="light">最近创建的话题</b-list-group-item>
                <b-list-group-item v-for="item in authorMessage.recent_topics" v-bind:key="item.id">
                <b-img v-bind:src="item.author.avatar_url" fluid alt="Responsive image"></b-img>
                <router-link :to="{name:'Post',params:{id:item.id}}">{{ item.title}}</router-link>
                 </b-list-group-item>
            </b-list-group>
            <b-list-group class="lastedreplay">
                <b-list-group-item variant="light">最近参与的话题</b-list-group-item>
                <b-list-group-item v-for="item in authorMessage.recent_replies" v-bind:key="item.id">
                    <b-img v-bind:src="item.author.avatar_url" fluid alt="Responsive image"></b-img>
                     <router-link :to="{name:'Post',params:{id:item.id}}">{{ item.title}}</router-link>
                </b-list-group-item>
            </b-list-group>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Author",
  data() {
    return {
      authorMessage: []
    };
  },
  methods: {
    fetchUserData() {
      axios
        .get("https://cnodejs.org/api/v1/user/" + this.$route.params.id)
        .then(function(response) {
          if (response.data.success) {
            console.log("fetch user data success");
            return response.data.data;
          } else {
            throw new Error("fetch user data failed");
          }
        })
        .then(data => {
          this.authorMessage = data;
        });
    }
  },
  mounted() {
    this.fetchUserData();
  }
};
</script>
<style scoped>
.user img {
  height: 40px;
  width: 40px;
}
.lastedtopic {
    padding-top:15px;
}
.lastedtopic img {
  height: 30px;
  width: 30px;
}

.lastedreplay {
  padding-top:15px;
}
.lastedreplay img {
  height: 30px;
  width: 30px;
}
</style>



