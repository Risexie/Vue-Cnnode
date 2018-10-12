<template>
<b-container class="listGroup">
<b-row>
<b-col md="9">
<b-list-group-item class="nav"><span>用户收藏</span></b-list-group-item>
     <b-list-group-item v-if="!UserCollect">暂无收藏</b-list-group-item>
     <b-list-group-item v-for="item in UserCollect" v-bind:key="item.id" class="item" href="#" v-else>
          <b-form-row>
            <b-col  sm="1" md="1" lg="1">
         <router-link :to="{ name:'Author',params:{id:item.author.loginname}}"><b-img v-bind:src="item.author.avatar_url" fluid alt="Responsive image" class="img"></b-img></router-link>
            </b-col>
            <b-col  sm="1" md="1" lg="1">
          <span class="replyleft">{{ item.reply_count }}</span><span>/ {{ item.visit_count }}</span>
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
      <UserMessage/>
      </b-col>
</b-row>
</b-container>

</template>
<script>
import axios from "axios";
import UserMessage from "./Common/UserMessage"

export default {
  name: "UserCollect",
  data() {
    return {
      UserCollect: [],
      Message: []
    };
  },
  created() {
      axios
        .get(
          "https://cnodejs.org/api/v1/topic_collect/" + this.$route.params.id)
        .then(function(response) {
          return response.data.data;
        })
        .then(data => {
          this.UserCollect = data;
        })
        .catch(function(err) {
          alert(err);
        });
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
  background-color: #e5e5e5;
  border-radius: 10%;
  text-align: center;
  height:30px;
  line-height: 30px;
  width:50px;

}
.tabTop {
  color: white;
  padding: 2px 3px 2px 3px;
  background-color: #80bd01;
  border-radius: 10%;
  height:30px;
  line-height: 30px;
  width:50px;
}
.listGroup {
  padding-top: 15px;
}.listGroup .replyleft{
  color:#9e78c0
}
.listGroup .nav{
background-color: #f6f6f6;
font-size:14px;
}

</style>


