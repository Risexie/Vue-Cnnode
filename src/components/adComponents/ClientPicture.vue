<template>

<div id="ClientPicture">
<b-card header="客户端二维码">
<b-img :src="src" fluid alt="Responsive image"></b-img>
<b-link :href="href" :style="styles">客户端源码地址</b-link>
</b-card>
</div>

</template>
<script>
export default {
  name: "ClientPicture",
  data() {
    return {
      src: "//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU",
      href: "https://github.com/soliury/noder-react-native",
      styles: {
        fontSize: 13 + "px",
        color: "#778087"
      }
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ClientPicture {
  margin-top: 10px;
}
</style>

