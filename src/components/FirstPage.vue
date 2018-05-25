<template>
<div>
  <b-container>
     <b-row>
      <b-col  sm="12" md="12" lg="9" xl="9"> 
        <ContentList></ContentList>
      </b-col>
      <b-col   lg="3" xl="3" id="SideNav">
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

import FriendlyLink from "./FriendlyLink";
import SideBarAds from "./SideBarAds";
import ClientPicture from "./ClientPicture";
import GithubLogin from "./GithubLogin";
import ContentList from "./ContentList";
import Footer from "./Footer";

export default {
  name: "HelloWorld",
  components: {

    ClientPicture,
    SideBarAds,
    FriendlyLink,
    GithubLogin,
    ContentList,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listGroup{
  padding-top:15px;
}
.listGroup .Navbar .link {
  padding: 10px 5px 5px 3px;
  color: #80bd01;
  margin: 0 10px;
  font-size: 16px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB";
}
.listGroup .Navbar .linkactive {
  background-color: #80bd01;
  color: white;
  padding: 3px;
  border-radius: 15%;
  font-size: 14px;
}
</style>