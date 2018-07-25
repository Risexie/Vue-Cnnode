<template>
<b-container class="listGroup">
    <b-row>
      <b-col md="9" lg="9" xg="9">
            <b-list-group>
                <b-list-group-item variant="dark"><h1>发表主题</h1></b-list-group-item>
                <b-list-group-item>
                    <p>选择板块
                     <Select v-model="tab" style="width:200px">
                        <Option value="ask" disabled>Ask</Option>
                        <Option value="share" disabled>Share</Option>
                        <Option value="job" disabled>Job</Option>
                        <Option value="dev">Dev(测试板块)</Option>
                     </Select>
                    </p>
                      <Input v-model="createTitle" placeholder="标题字数10字以上" style="width: 783px"></Input>
                      <Input v-model="createContent" type="textarea" :rows="20" placeholder="文章内容" style="width: 783px"></Input>
                </b-list-group-item>
                <b-list-group-item> <Button  @click="EditPassage" type="primary">提交</Button></b-list-group-item>
            </b-list-group>
      </b-col>
      <!-- 右侧作者信息 -->

      <b-col md ="3" class="author">
      <b-card header="作者" >
        <b-form-row>
          <b-col sm="4" md="4" lg="4"> 
         <router-link :to="{ name:'Author',params:{id:authorMessage.loginname}}"><b-img :src="authorMessage.avatar_url" fluid alt="Responsive image"></b-img></router-link>
          </b-col>
          <b-col sm="8" md="8" lg="8">
         <router-link :to="{ name:'Author',params:{id:authorMessage.loginname}}">{{ authorMessage.loginname }}</router-link>
         <p>积分： {{ authorMessage.score}}</p>
          </b-col>
        </b-form-row>
      </b-card>
      <div class="otherTopic">
      <b-card header="作者的其他话题" >
        <div v-for="item in authorMessage.recent_topics" :key="item.id">
          <p>
         <router-link :to="{ name:'Post',params:{ id:item.id }}" style="font-size:14px;line-height:30px">{{ shortTitle(item.title) }} </router-link>
         </p>
         </div>
       </b-card>
      </div>
      </b-col>
    </b-row>
</b-container>
    
</template>
<script>
import axios from "axios";

export default {
  name: "EditPassage",
  data :function() {
    return {
      createTitle: '',
      createContent: '',
      accessToken: '',
      authorMessage: [],
      tab: "",
      
      cityList: [
        {
          value: "ask",
          label: "ask"
        },
        {
          value: "share",
          label: "share"
        },
        {
          value: "job",
          label: "job"
        },
        {
          value: "dev",
          label: "dev"
        }
      ],
    };
  },
  methods: {
    fetchPassage() {
      axios
        .get("https://cnodejs.org/api/v1/topic/" + this.$route.params.id)
        .then(function(response) {
          if (response.data.success) {
            console.log("fetch data success");
            return response.data.data;
          } else {
            throw new Error("failed to fetch dada");
          }
        })
        .then(data => {
          this.createTitle = data.title;
          this.createContent = data.content;
        })
        .catch(function(err) {
          this.$Message.error('读取文章出错')
        });
    },
    fetchAuthorData() {
      axios
        .get("https://cnodejs.org/api/v1/user/" + this.$store.state.loginName)
        .then(function(response) {
          if (response.data.success) {
            console.log("fetch AuthorData success");
            return response.data.data;
          } else {
            this.$Message.error("无法读取数据");
          }
        })
        .then(data => {
          this.authorMessage = data;
        })
        .catch(err => {
          this.$Message.error("读取数据出错");
        });
    },
    EditPassage() {
      axios({
        url: "https://cnodejs.org/api/v1/topics/update",
        method: "post",
        data: {
          accesstoken: this.$store.state.accessToken,
          tab:this.tab,
          title:this.createTitle,
          content:this.createContent
        },
        transformRequest: [
          function(data) {
            // Do whatever you want to transform the data
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(function(response) {
          return (data = response.data);
        })
        .then(data => {
          if (data.success) {
            this.$Message.success("修改成功");
          }else {
            this.$Message.error('修改失败')
          }
        })
        .catch(err => {
          this.$Message.error("出错");
        });
    },
    shortTitle(title) {
      if (title.length > 16) {
        var shortTitle = title.slice(0, 16) + "....";
        return shortTitle;
      } else {
        return title;
      }
    }
  },
  mounted() {
    this.fetchPassage();
    this.fetchAuthorData();
  }
};
</script>
<style scoped>
.listGroup{
  padding-top:15px;
}
.otherTopic{
  padding-top:15px;
}
</style>



