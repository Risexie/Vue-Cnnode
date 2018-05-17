<template>
<div>
  <Header></Header>
  <b-container>
     <b-row>
      <b-col md="9"> 
        <b-list-group class="listGroup">
     <b-list-group-item variant="secondary" class="Navbar">
         <router-link to="/" class="link"  >全部</router-link>
         <router-link to="/GoodContent" class="linkactive">精华</router-link>
         <router-link to="/ShareContent" class="link">分享</router-link>
         <router-link to="/AskContent" class="link">问答</router-link>
         <router-link to="/JobContent" class="link">招聘</router-link>
         <router-link to="/TestContent" class="link">客户端测试</router-link>
     </b-list-group-item>
    </b-list-group>
        <ContentList></ContentList>
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
import ContentList from "./ContentList";

export default {
  name: "HelloWorld",
  components: {
    Header,
    ClientPicture,
    SideBarAds,
    FriendlyLink,
    GithubLogin,
    ContentList
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listGroup .item {
  font-size: 16px;
  padding: 10px 0 10px 0;
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