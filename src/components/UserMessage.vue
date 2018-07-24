<template>
<b-container class="listGroup">
  <b-row>
      <!-- 左侧消息 -->
      <b-col md="9">
        <b-list-group>
    <b-list-group-item variant="dark" >新消息</b-list-group-item>
    <b-list-group-item v-if="this.messages.hasnot_read_messages">
    <b-form-row v-for="item in messages.hasnot_read_messages" v-bind:key="item.id" class="hasnot_read_messages" >
      <b-col sm="1" md="1" lg="1">
          <router-link :to="{name:'Author',params:{id:item.author.loginname}}"><b-img v-bind:src="item.author.avatar_url"></b-img></router-link>
      </b-col>
      <b-col sm="11" md="11" lg="11">   
          <h4>{{ item.author.loginname}}</h4> 
          reply from <router-link :to="{ name:'Post',params:{id:item.topic.id}}">{{ item.topic.title }}</router-link>
          <p v-html="item.reply.content"></p>
      </b-col>
    </b-form-row> 
    </b-list-group-item>
    <b-list-group-item v-else>
      <p>无消息</p>
    </b-list-group-item>
    <b-list-group-item variant="dark" >已读消息</b-list-group-item>
    <b-list-group-item v-if="this.messages.has_read_messages">
    <b-form-row v-for="item in messages.has_read_messages" v-bind:key="item.id" class="has_read_messages">
        <b-col sm="1" md="1" lg="1">
          <router-link :to="{name:'Author',params:{id:item.author.loginname}}"><b-img v-bind:src="item.author.avatar_url"></b-img></router-link>
      </b-col>
      <b-col sm="11" md="11" lg="11">   
          {{ item.author.loginname}} reply from <router-link :to="{ name:'Post',params:{id:item.topic.id}}">{{ item.topic.title }}</router-link>
          <p v-html="item.reply.content"></p>
      </b-col>
    </b-form-row>
    </b-list-group-item>
    <b-list-group-item v-else>
      <p>无消息</p>
    </b-list-group-item>
        </b-list-group>
      </b-col>
      <!-- 右侧作者信息 -->
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
  name: "UserMessage",
  data() {
    return {
      messages: [],
      UserMessage: [],
    };
  },
  methods: {
    fetchMessageData() {
      axios
        .get(
          "https://cnodejs.org/api/v1/messages/?accesstoken=" + this.$store.state.accessToken
        )
        .then(function(response) {
          return response.data.data;
        })
        .then(data => {
          this.message = data;
        })
        .catch(err => {
          alert(err);
        });
    },
    fetchUserMessage() {
      axios
        .get("https://cnodejs.org/api/v1/user/" + this.$store.state.loginName)
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
  mounted() {
    this.fetchMessageData();
    this.fetchUserMessage();
  },
};
</script>
<style scoped>
.hasnot_read_messages img {
  width: 40px;
}
.listGroup{
  padding-top:15px;
}
</style>


