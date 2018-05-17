<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"></b-img>
      
       <b-nav-form >
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
       </b-nav-form>
     
      <b-collapse is-nav id="nav_collapse" >
       <b-navbar-nav class="ml-auto" id="link">
      <!-- Right aligned nav items -->
        <b-nav-item>首页</b-nav-item>
        <b-nav-item>新手入门</b-nav-item>
        <b-nav-item>API</b-nav-item>
        <b-nav-item>关于</b-nav-item>
        <b-nav-item>注册</b-nav-item>
        <b-nav-item>登录</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  data() {
      return{
          
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 30px;
}
#link {
  font-size: 13px;
}
</style>