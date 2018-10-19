<template>
<b-container class="listGroup">
    <b-row>
        <b-col sm="12" md="12" lg="9">
            <b-list-group>
                <b-list-group-item class="nav"><span>发表主题</span></b-list-group-item>
                <b-list-group-item>
                     <Select v-model="tab" style="width:200px">
                        <Option value="ask">Ask</Option>
                        <Option value="share">Share</Option>
                        <Option value="job">Job</Option>
                        <Option value="dev">Dev(测试板块)</Option>
                     </Select>
                     <span>板块选择</span>
                      <b-form-input v-model="createTitle" placeholder="标题字数10字以上"></b-form-input>
                      <b-form-textarea v-model="createContent" type="textarea" :rows="20" placeholder="文章内容"></b-form-textarea>
                </b-list-group-item>
                <b-list-group-item> <Button  @click="CreatePassage" type="primary">发表文章</Button></b-list-group-item>
            </b-list-group>
        </b-col>
        <b-col class="d-none d-lg-block d-xl-block">
          <b-card header="个人信息">
          <UserMessage/>
          </b-card>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
import axios from "axios";
import UserMessage from "./Common/UserMessage"

export default {
  name: "Create",
  data() {
    return {
      createTitle: "",
      createContent: "",
      accessToken: "",
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
      tab: "dev"
    };
  },
  methods: {
    CreatePassage() {
      axios({
        url: "https://cnodejs.org/api/v1/topics",
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
          return response.data
        })
        .then(data => {
          if (data.success) {
            this.$Message.success("发表成功");
          }else{
            this.$Message.error('发布失败')
          }
        })
        .catch(err => {
          this.$Message.error("出错");
        });

        
    }
  }
};
</script>
<style scoped>
.listGroup {
  padding-top: 15px;
}
.listGroup .nav{
background-color: #f6f6f6;
font-size:14px;
}
</style>

