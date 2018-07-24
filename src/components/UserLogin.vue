<template>
  <b-collapse is-nav id="nav_collapse" class="nav_collapse">
    <b-navbar-nav class="ml-auto" id="link">
      <b-nav-item>注册</b-nav-item> 
    </b-navbar-nav>  
    <b-navbar-nav class="UserNav" v-if="LoginStatus">
      <b-nav-item ><router-link :to="{name:'UserMessage'}"><p>未读信息</p></router-link></b-nav-item>
      <b-nav-item ><router-link :to="{name:'UserCollect',params:{id:userMessage.loginname}}"><p>我的收藏</p></router-link></b-nav-item>
      <b-nav-item ><router-link :to="{name:'Create'}"><p>发表文章</p></router-link></b-nav-item>
      <b-nav-item ><router-link :to="{name:'Author',params:{id:userMessage.loginname}}"><b-img :src="userMessage.avatar_url"></b-img></router-link></b-nav-item>     
      <b-nav-item @click="handleLogOut"><p>退出</p></b-nav-item> 
    </b-navbar-nav>
    <b-navbar-nav v-else>
    <b-nav-item @click="handleRender" >登录</b-nav-item> 
    
    </b-navbar-nav>
  </b-collapse>   
</template>
<script>
import axios from "axios";
import Vuex from "vuex";


export default {
  name: "Userlogin",
  data() {
    return {
      accessToken: "",
      userMessage: [],
      LoginStatus: false
    };
  },
  methods: {
    isLoginin() {
      if (sessionStorage.getItem("LoginStatus")) {
        this.LoginStatus = sessionStorage.getItem("LoginStatus");
        axios
          .post(
            "https://cnodejs.org/api/v1/accesstoken/?accesstoken=" +
              this.$store.state.accessToken
          )
          .then(function(response) {
            return response.data;
          })
          .then(data => {
            if (data.success) {
              this.userMessage = data;
            }
          })
          .catch(err => {
            alert(err);
          });
      }
    },
    handleLogOut() {
      this.$store.commit('getAccessToken',null)
      this.$store.commit('getLoginName',null)
      this.LoginStatus = false;
      sessionStorage.removeItem('LoginStatus')
    },
    handleRender() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              accessToken: this.accessToken,
              autofocus: true,
              placeholder: "请输入你的accsessToken"
            },
            on: {
              input: val => {
                this.accessToken = val;
              }
            }
          });
        },
        onOk: confirm => {
          axios
            .post(
              "https://cnodejs.org/api/v1/accesstoken/?accesstoken=" +
                this.accessToken
            )
            .then(function(response) {
              return response.data;
            })
            .then(data => {
              if (data.success) {
                this.userMessage = data;
                this.LoginStatus = true;
                sessionStorage.setItem("LoginStatus", this.LoginStatus);
                this.$store.commit('getAccessToken', this.accessToken);
                this.$store.commit('getLoginName', this.userMessage.loginname)
                this.$Message.success({
                  render: h => {
                    return h("div", ["登录成功"]);
                  }
                });
              }
            })
            .catch(err => {
              this.$Message.warning({
                render: h => {
                  return h("div", ["错误的accessToken"]);
                }
              });
            });
        }
      });
    }
  },
  mounted() {
    this.isLoginin();
  }
};
</script>
<style scoped>
.UserNav img {
  height: 25px;
  width: 25px;
}
.UserNav p {
  color: rgba(255, 255, 255, 0.5);
  padding: 2px 0px 0px 0px;
}
.UserNav :hover {
  color: rgba(255, 255, 255, 0.75);
}
.UserNav a {
  font-size: 14px;
}
.nav_collapse a {
  font-size: 14px;
}

</style>



