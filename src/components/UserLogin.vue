<template>
  <b-collapse is-nav id="nav_collapse" class="nav_collapse">
    <b-navbar-nav class="ml-auto" id="link">
      <b-nav-item>注册</b-nav-item>
    </b-navbar-nav>  
    <b-navbar-nav class="UserNav" v-if="userStatus">
      <b-nav-item ><router-link :to="{name:'UserMessage',params:{id:accessToken}}"><p>未读信息</p></router-link></b-nav-item>
      <b-nav-item ><router-link :to="{name:'UserCollect',params:{id:userMessage.loginname}}"><p>我的收藏</p></router-link></b-nav-item>
      <b-nav-item ><router-link :to="{name:'Author',params:{id:userMessage.loginname}}"><b-img v-bind:src="userMessage.avatar_url"></b-img></router-link></b-nav-item>
      <b-nav-item @click="handleLogOut" >退出</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav v-else>
    <b-nav-item @click="handleRender" >登录</b-nav-item>
    
    </b-navbar-nav>
  </b-collapse>
</template>
<script>
import axios from "axios";
export default {
  name: "Userlogin",
  data() {
    return {
      accessToken: "",
      userMessage: [],
      userStatus: false
    };
  },
  methods: {
    isLoginin() {
      if (sessionStorage.getItem("userStatus")) {
        this.userStatus = sessionStorage.getItem("userStatus");
        this.accessToken = sessionStorage.getItem("accessToken");
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
          }
        })
        .catch(err => {
          alert(err);
        });
      }
    },
    handleLogOut() {
      sessionStorage.clear();
      this.userStatus = false;
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
                this.userMessage = data
                this.userStatus = true
                sessionStorage.setItem("userStatus", this.userStatus);
                sessionStorage.setItem("accessToken", this.accessToken);
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
  padding: 3px 0px 0px 0px;
}
.UserNav a {
  font-size: 14px;
}
.nav_collapse a {
  font-size: 14px;
}
</style>



