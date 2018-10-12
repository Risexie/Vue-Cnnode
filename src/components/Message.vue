<template>
<b-container class="listGroup">
  <b-row>
      <!-- 左侧消息 -->
      <b-col md="9">
        <b-list-group>
    <b-list-group-item class="nav">新消息</b-list-group-item>
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
      <p>暂无消息</p>
    </b-list-group-item>
    <b-list-group-item class="nav">已读消息</b-list-group-item>
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
      <p>暂无消息</p>
    </b-list-group-item>
        </b-list-group>
      </b-col>
      <!-- 右侧作者信息 -->
      <UserMessage/>
  </b-row>
</b-container>
</template>
<script>
import UserMessage from "./Common/UserMessage";
import axios from "axios";
export default {
  name: "Message",
  data() {
    return {
      messages: [],
      UserMessage: [],
    };
  },
  components:{
    UserMessage
  },
  created:function(){
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
    }
};
</script>
<style scoped>
.hasnot_read_messages img {
  width: 40px;
}
.listGroup{
  padding-top:15px;
}
.listGroup .nav{
background-color: #f6f6f6;
font-size:14px;
}
</style>


