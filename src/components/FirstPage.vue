<template>
<div>
  <Header></Header>
  <b-container>
     <b-row>
      <b-col md="9"> 

      </b-col>
      <b-col md="3" id="SideNav">
       <GithubLogin></GithubLogin>
       <SideBarAds></SideBarAds>
       <FriendlyLink></FriendlyLink>
       <ClientPicture></ClientPicture>
      </b-col>
     </b-row>
</b-container>
</div>

</template>

<script>
import Header from "./Header";
import FriendlyLink from "./FriendlyLink";
import SideBarAds from "./SideBarAds";
import ClientPicture from "./ClientPicture";
import GithubLogin from "./GithubLogin";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    Header,
    ClientPicture,
    SideBarAds,
    FriendlyLink,
    GithubLogin
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
