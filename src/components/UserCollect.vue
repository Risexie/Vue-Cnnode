<template>
<b-container class="listGroup">
<b-row>
<b-col md="9">
<b-list-group-item variant="dark"><h1>用户收藏</h1></b-list-group-item>
     <b-list-group-item v-for="item in UserCollect" v-bind:key="item.id" class="item" href="#" >
          <b-form-row>
            <b-col  sm="1" md="1" lg="1">
         <router-link :to="{ name:'Author',params:{id:item.author.loginname}}"><b-img v-bind:src="item.author.avatar_url" fluid alt="Responsive image" class="img"></b-img></router-link>
            </b-col>
            <b-col  sm="1" md="1" lg="1">
          <p>{{ item.reply_count }}/ {{ item.visit_count }} </p>
            </b-col>
               <b-col sm="1" md="1" lg="1">
            <div class="tab">
          <p v-if="item.top" class="tabTop">置顶</p>
          <p v-else-if="item.good" class="tabTop">精华</p>
          <p v-else-if="item.tab === 'share'">分享</p>
          <p v-else-if="item.tab === 'ask'">问答</p>
          <p v-else>招聘</p>
          </div>
          </b-col>
            <b-col  sm="9" md="9" lg="9">
          <router-link :to="{ name:'Post',params:{ id:item.id }}">{{ item.title }}</router-link>
            </b-col>
          </b-form-row>
    </b-list-group-item>
    </b-col>

    <b-col md ="3" class="author">
      <b-card header="个人信息" >
        <b-form-row>
          <b-col sm="4" md="4" lg="4"> 
         <router-link :to="{ name:'Author',params:{id:UserMessage.loginname}}"><b-img :src="UserMessage.avatar_url" fluid alt="Responsive image"></b-img></router-link>
          </b-col>
          <b-col sm="8" md="8" lg="8">
         <router-link :to="{ name:'Author',params:{ id:UserMessage.loginname}}">{{ UserMessage.loginname }}</router-link>
         <p>积分： {{ UserMessage.score}}</p>
          </b-col>
        </b-form-row>
      </b-card>
      </b-col>
</b-row>
</b-container>

</template>
<script>
import axios from "axios";

export default {
  name: "UserCollect",
  data() {
    return {
      UserCollect: [],
      UserMessage: []
    };
  },
  methods: {
    fetchUserCollectData() {
      axios
        .get(
          "https://cnodejs.org/api/v1/topic_collect/" + this.$route.params.id
        )
        .then(function(response) {
          return response.data.data;
        })
        .then(data => {
          this.UserCollect = data;
        })
        .catch(function(err) {
          alert(err);
        });
    },
    fetchUserMessage() {
      axios
        .get(
          "https://cnodejs.org/api/v1/user/" + this.$route.params.id
        )
        .then(function(response) {
          return response.data.data;
        })
        .then(data => {
          this.UserMessage = data;
        })
        .catch(function(err) {
          alert(err);
        });
    }
  },
  mounted(){
      this.fetchUserCollectData(),
      this.fetchUserMessage();
  }
};
</script>
<style scoped>
.listGroup .item a {
  font-size: 16px;
  padding: 10px 0 10px 0;
  color: #888;
}
.listGroup .item .img {
  height: 30px;
  width: 30px;
  border-radius: 10%;
}
.tab {
  color: #999;
  padding: 2px 3px 2px 3px;
  background-color: #e5e5e5;
  border-radius: 10%;
  text-align: center;
}
.tabTop {
  color: white;
  padding: 2px 3px 2px 3px;
  background-color: #80bd01;
  border-radius: 10%;
}
</style>


