<template>
 <div class="listGroup">
   <b-list-group-item class="nav">
   <b-link :class="{'active':activeItem === 'all'}" @click="select('all');cut('all')">全部</b-link>
   <b-link :class="{'active':activeItem === 'good'}" @click="select('good');cut('good')">精华</b-link>
   <b-link :class="{'active':activeItem === 'share'}" @click="select('share');cut('share')">分享</b-link>
   <b-link :class="{'active':activeItem === 'ask'}" @click="select('ask');cut('ask')">问答</b-link>
   <b-link :class="{'active':activeItem === 'job'}" @click="select('job');cut('job')">招聘</b-link>
   </b-list-group-item>
     <b-list-group-item v-for="item in posts" :key="item.id" class="item" href="#" >
          <b-form-row>
            <b-col  sm="1" md="1" lg="1">
         <router-link :to="{ name:'Author',params:{id:item.author.loginname}}"><b-img :src="item.author.avatar_url" fluid alt="Responsive image" class="img"></b-img></router-link>
            </b-col>
            <b-col  sm="1" md="1" lg="1">
          <span class="replyleft">{{ item.reply_count }}</span><span>/ {{ item.visit_count }} </span> 
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
          <router-link :to="{ name:'Post',params:{ id:item.id }}">{{ shortTitle(item.title) }}</router-link>
            </b-col>
          </b-form-row>
    </b-list-group-item>
    <b-list-group-item class="lastItem">
      <b-pagination size="sm" :total-rows="1000" v-model="currentPage" :per-page="10">
    </b-pagination>
    </b-list-group-item>
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContentList",
  data() {
    return {
      posts: [],
      tab: "all",
      activeItem: "all",
      currentPage: 1
    };
  },
  created() {
    axios
      .get("https://cnodejs.org/api/v1/topics")
      .then(response => {
        return response.data.data;
      })
      .then(data => {
        this.posts = data;
      })
      .catch(err => {
        this.$Message.error('无法读取数据');
      });
  },
  methods: {
    /* Switch tab */
    cut(tab) {
      axios
        .get("https://cnodejs.org/api/v1/topics" + "?tab=" + tab)
        .then(response =>{
          return response.data.data;
        })
        .then(data => {
          this.posts = data;
        })
        .catch(err => {
          this.$Message.error('无法读取数据');
        });
    },
    /* Swtich Active item */
    select(type) {
      this.activeItem = type;
    },
    shortTitle(title){
      if(title.length > 40){
        var shortTitle = title.slice(0,40) + '....'
        return shortTitle
      }else {
        return title
      }
    }
  },
  watch: {
    /*Switch page */
    currentPage: function() {
      axios
        .get(
          "https://cnodejs.org/api/v1/topics" +
            "?page=" +
            this.currentPage +
            "&tab=" +
            this.tab
        )
        .then(response => {
          return response.data.data;
        })
        .then(data => {
          this.posts = data;
        })
        .catch(err => {
          this.$Message.error('无法读取数据');
        });
    }
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
.listGroup .nav a {
  padding: 5px 7px 5px 7px;
  color: #80bd01;
  font-size: 16px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB";
}
.listGroup .nav{
  background-color:#f6f6f6
}

.active {
  color:white !important;
  background-color: #80bd01;
  padding: 3px;
  border-radius: 15%;
  font-size: 14px;

}
.listGroup span{
  height:30px;
  line-height: 30px;
}
.listGroup .replyleft{
  color:#9e78c0
}
.tab {
  background-color: #e5e5e5;
  border-radius: 10%;
  text-align: center;
  height:30px;
  line-height:30px;
  width:50px;
}
.tabTop {
  color: white;
  padding: 2px 4px;
  background-color: #80bd01;
  border-radius: 10%;
  height:30px;
  line-height:28px;
}
.lastItem {
  border-top: none;
}
</style>
