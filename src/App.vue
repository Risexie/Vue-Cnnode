<template>
  <div id="app">
    <div class="content">
    <Header></Header>
    <router-view/>
    </div>
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
.content{
  min-height: calc(100vh - 70px);
}
.footer{
  padding-top:20px;
  height: 160px;
}

</style>
