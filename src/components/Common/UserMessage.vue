<template>
        <b-form-row>
          <b-col sm="4" md="4" lg="4"> 
         <router-link :to="{ name:'Author',params:{id:UserMessage.loginname}}"><b-img :src="UserMessage.avatar_url" fluid alt="Responsive image"></b-img></router-link>
          </b-col>
          <b-col sm="8" md="8" lg="8">
         <router-link :to="{ name:'Author',params:{ id:UserMessage.loginname}}">{{ UserMessage.loginname }}</router-link>
         <p>积分： {{ UserMessage.score}}</p>
          </b-col>
        </b-form-row>
</template>
<script>
import axios from "axios";

export default {
  name: "UserMessage",
  data:function(){
    return {
      UserMessage:[]
    }
  },
  created() {
     axios
      .get("https://cnodejs.org/api/v1/user/" + this.$store.state.loginName)
      .then(function(response) {
        return response.data.data;
      })
      .then(data => {
        this.UserMessage = data;
      })
      .catch(function(err) {
        alert(err);
      });

  },
}
</script>
<style scoped>

</style>

