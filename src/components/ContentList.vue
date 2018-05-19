<template>
 <div class="listGroup">
   <b-list-group-item>
   <b-link :class="{'active':activeItem === 'all'}" @click="select('all');cut('all')">全部</b-link>
   <b-link :class="{'active':activeItem === 'good'}" @click="select('good');cut('good')">精华</b-link>
   <b-link :class="{'active':activeItem === 'share'}" @click="select('share');cut('share')">分享</b-link>
   <b-link :class="{'active':activeItem === 'ask'}" @click="select('ask');cut('ask')">问答</b-link>
   <b-link :class="{'active':activeItem === 'job'}" @click="select('job');cut('job')">招聘</b-link>
   </b-list-group-item>
     <b-list-group-item v-for="item in posts" v-bind:key="item.id" class="item">
         <b-img v-bind:src="item.author.avatar_url" fluid alt="Responsive image" class="img"></b-img>
         {{ item.reply_count }}/{{ item.visit_count }}   {{ item.title }}
    </b-list-group-item>
     <b-pagination-nav @click="select('switchPage')" :number-of-pages="100" v-model="currentPage" />
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContentList",
  data() {
    return {
      posts: [],
      activeItem: "all",
      tab: "all",
      currentPage: 1,
    };
  },
  created() {
    var vm = this
    axios
      .get("https://cnodejs.org/api/v1/topics")
      .then(function(response) {
        return response.data.data;
      })
      .then(function(data) {
        vm.posts = data;
      })
      .catch(function(err) {
        alert(err);
      });
  },
  methods: {
    /* Switch tab */
    cut(tab) {
      var vm = this;
      axios
        .get("https://cnodejs.org/api/v1/topics" + "?tab=" + tab)
        .then(function(response) {
          return response.data.data;
        })
        .then(function(data) {
          vm.posts = data;
        })
        .catch(function(err) {
          alert(err);
        });
    },

    /* Swtich Active item */
    select(type) {
      this.activeItem = type;
    },

     /*Switch page */
    switchPage(currentPage,tab) {
      var vm = this
      axios
        .get("https://cnodejs.org/api/v1/topics" + "?page=" + currentPage + '&tab=' + tab)
        .then(function(response) {
          return response.data.data;
        })
        .then(function(data) {
        vm.posts = data;
        })
        .catch(function(err) {
          alert(err);
        });
    }
  },
};
</script>

<style scoped>
.listGroup .item {
  font-size: 16px;
  padding: 10px 0 10px 0;
}
.listGroup .item .img {
  height: 30px;
  width: 30px;
}
.listGroup .link {
  padding: 5px 10px 5px 10px;
  color: #80bd01;
  margin: 0 10px;
  font-size: 16px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB";
}
.listGroup .active {
  background-color: #80bd01;
  color: white;
  padding: 3px;
  border-radius: 15%;
  font-size: 14px;
}
</style>
