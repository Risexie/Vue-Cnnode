<template>
 <div class="listGroup">
     <b-list-group-item v-for="item in posts" v-bind:key="item.id" class="item">
         <b-img v-bind:src="item.author.avatar_url" fluid alt="Responsive image" class="img"></b-img>
         {{ item.reply_count }}/{{ item.visit_count }}   {{ item.title }}
    </b-list-group-item>
 </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ContentList",
  beforeCreate() {
      var vm = this;
    axios
      .get("https://cnodejs.org/api/v1/topics")
      .then(function(response) {
        return response.data.data;
      })
      .then(function(data) {
        vm.posts = data;
      })
      .catch(function(err){
          alert(err);
      })
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>

<style scoped>
.listGroup .item{
font-size:16px;
padding:10px 0 10px 0;
}
.listGroup .item .img {
height:30px;
width:30px;
}
.listGroup .Navbar .link{
padding:10px 5px 5px 3px;
color:#80bd01;
margin: 0 10px;
font-size:16px;
font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB"
}
.listGroup .Navbar .linkactive{
    background-color:#80bd01;
    color:white;
    padding:3px;
    border-radius:15%;
    font-size:14px;
}
</style>
