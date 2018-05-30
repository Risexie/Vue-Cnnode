<template>
<b-container>
    <b-list-group-item variant="dark" >新消息</b-list-group-item>
    <b-list-group-item>
    <b-form-row v-for="item in messages.hasnot_read_messages" v-bind:key="item.id" class="hasnot_read_messages">
      <b-col sm="1" md="1" lg="1">
          <router-link :to="{name:'Author',params:{id:item.author.loginname}}"><b-img v-bind:src="item.author.avatar_url"></b-img></router-link>
      </b-col>
      <b-col sm="11" md="11" lg="11">   
          {{ item.author.loginname}} reply from <router-link :to="{ name:'Post',params:{id:item.topic.id}}">{{ item.topic.title }}</router-link>
          <p v-html="item.reply.content"></p>
      </b-col>
    </b-form-row> 
    </b-list-group-item>
    <b-list-group-item variant="dark" >已读消息</b-list-group-item>
    <b-list-group-item>
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
          "https://cnodejs.org/api/v1/messages/?accesstoken=" +
            this.$route.params.id
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
  },
  mounted() {
    this.fetchMessageData();
  }
};
</script>
<style scoped>
.hasnot_read_messages img{
width:40px;

}
.has_read_messages {
}
</style>


