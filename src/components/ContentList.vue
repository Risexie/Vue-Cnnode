
<template>
 <div>
   <b-list-group>
     <b-list-group-item v-for="item in posts" v-bind:key="item.id">
         {{ items.title }}
    </b-list-group-item>
   </b-list-group>
 </div>
</template>

<script>
export default {
  name: "ContentList",
  beforeCreate() {
    axios
      .get("https://cnodejs.org/api/v1/topics")
      .then(function(response) {
        return response.data.data;
      })
      .then(function(data) {
        posts = data;
      })
      .then(function(posts) {
        console.log(posts);
      });
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>

