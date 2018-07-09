<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <router-link to="/"><b-img :src="src"></b-img></router-link>
      <!-- Right aligned nav items -->
        <Userlogin></Userlogin>
      </b-container>
  </b-navbar>
</template> 

<script>
import Userlogin from "./Userlogin";
export default {
  name: "Header",
  components: {
    Userlogin
  },
  data:function(){
    return {
      src:'https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg'
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 41px;
}
</style>