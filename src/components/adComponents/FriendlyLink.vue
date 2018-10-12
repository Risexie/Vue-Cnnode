<template>
  <div id="topic">
    <b-card header="友情社区"
        header-tag="header">
      <b-link :href="rubyChina"><b-img :src="rubyChinaImg" fluid alt="Responsive image"></b-img></b-link>
      <b-link :href="goLang"><b-img :src="goLangImg" fluid alt="Responsive image"></b-img></b-link>
      <b-link :href="phpHub"><b-img :src="phpHubImg" fluid alt="Responsive image"></b-img></b-link>
      <b-link :href="testerHome"><b-img :src="testerHomeImg" fluid alt="Responsive image"></b-img></b-link>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "FriendlyLink",
  data() {
    return {
      //href
      rubyChina:"https://ruby-china.org/",
      goLang:"http://golangtc.com/",
      phpHub:"http://phphub.org/",
      testerHome:"https://testerhome.com/",
      //img
      rubyChinaImg:"../static/ruby.png",
      goLangImg:"../static/golang.png",
      phpHubImg:"../static/php.png",
      testerHomeImg:"//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topic {
  font-size: 13px;
  padding-top:10px;
}
img{
  padding:10px;
}

</style>
