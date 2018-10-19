<template>
<b-container class="listGroup">
  <b-row>
      <!-- 左侧消息 -->
    <b-col sm="12" md="12" lg="9">
    <b-list-group>
        <b-list-group-item class="nav">新消息</b-list-group-item>
        <div v-if="this.messages.hasnot_read_messages == []">
        <b-list-group-item v-for="item in messages.hasnot_read_messages" v-bind:key="item.id" class="hasnot_read_messages" > 
        <b-row>
          <b-col md="1" lg="1">
            <router-link :to="{name:'Author',params:{id:item.author.loginname}}"><b-img v-bind:src="item.author.avatar_url"></b-img></router-link>
          </b-col>
          <b-col md="11" lg="11">
            <span>{{ item.author.loginname}} 回复自</span><router-link :to="{ name:'Post',params:{id:item.topic.id}}">{{ item.topic.title }}</router-link>
            <p v-html="item.reply.content"></p>
            </b-col>
        </b-row>
  
        </b-list-group-item>
        </div>
        <div v-else>
          <b-list-group-item><p>暂无信息</p>
          </b-list-group-item>
        </div>
       


    <b-list-group-item class="nav">已读消息</b-list-group-item>
    <b-list-group-item v-for="item in messages.has_read_messages" v-bind:key="item.id" class="has_read_messages">
        <b-row>
          <b-col md="1" lg="1">
            <router-link :to="{name:'Author',params:{id:item.author.loginname}}"><b-img v-bind:src="item.author.avatar_url"></b-img></router-link>
          </b-col>
          <b-col md="11" lg="11">
            <span>{{ item.author.loginname}} 回复自</span><router-link :to="{ name:'Post',params:{id:item.topic.id}}">{{ item.topic.title }}</router-link>
            <p v-html="item.reply.content"></p>
            </b-col>
        </b-row>
    </b-list-group-item>
    
  </b-list-group>
      </b-col>
      <!-- 右侧信息 -->
      <b-col class="d-none d-lg-block d-xl-block">
      <b-card header="个人信息">
      <UserMessage/>
      </b-card>
      </b-col>
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
      UserMessage: []
    };
  },
  created: function() {
    axios
      .get(
        "https://cnodejs.org/api/v1/messages/?accesstoken=" +
          this.$store.state.accessToken
      )
      .then(function(response) {
        return response.data.data;
      })
      .then(data => {
        this.messages = data;
      })
      .catch(err => {
        alert(err);
      });
  }
};
</script>
<style scoped>
.hasnot_read_messages img {
  height: 30px;
  width: 30px;
  border-radius: 10%;
}
.listGroup {
  padding-top: 15px;
}
.listGroup .nav {
  background-color: #f6f6f6;
  font-size: 14px;
}
.has_read_messages img {
  height: 30px;
  width: 30px;
  border-radius: 10%;
}
</style>


