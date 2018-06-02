<template>
<div class="sideBar">
  <b-card 
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
        CNode：Node.js专业中文社区
        你可以<router-link to="#">登录</router-link>或<router-link to="#">注册</router-link>，也可以
    </p>
    <b-button ><router-link to="#">通过GitHub登录</router-link></b-button>
  </b-card>
</div>

</template>
<script>
export default {
  name: "GithubLogin",
  data() {
    return {
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .sideBar{
    font-family: "Helvetica Neue";
    font-size:14px;
    padding-top:13px

}

</style>
