<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <div class="footer">
    <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components:{
    Header,
    Footer
  }
};
</script>
<style>
body {
  background-color:#e1e1e1;
}
.footer{
  padding-top:20px;
}
</style>
