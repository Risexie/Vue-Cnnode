<template>
  <div id="app">
    <Header/>
    <div class="content">
    <router-view/>
    </div>
    <div class="footer">
    <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
export default {
  name: "App",
  components:{
    Header,
    Footer
  }
};
</script>
<style>
#app {
  background-color:#e1e1e1;
}
.content{
  min-height: calc(100vh - 70px);
}
.footer{
  padding-top:20px;
}

</style>
