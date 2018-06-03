<template>
<b-container>
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
                      <Input v-model="createTitle" placeholder="标题字数10字以上" style="width: 785px"></Input>
                      <Input v-model="createContent" type="textarea" :rows="20" placeholder="文章内容"></Input>
                </b-list-group-item>
                <b-list-group-item> <Button  @click="CreatePassage" type="primary">发表文章</Button></b-list-group-item>
            </b-list-group>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
import axios from "axios";

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
        },
      ],
      tab: ""
    };
  },
  methods: {
      CreatePassage(){
          this.accessToken = sessionStorage.getItem('accessToken')
          axios.post("https://cnodejs.org/api/v1/topics/?tab=" + this.tab + "&accesstoken=" + this.accessToken +"&title=" + this.createTitle + "&content=" + this.createContent)
          .then(function(response){
              return data = response.data
          })
          .then(data => {
              if(data.success){
                this.$Message.success("发表成功");
              }
          })
          .catch(err =>{
              this.$Message.error("发布失败")
        })
      },
      
  },
};
</script>
<style scoped>
</style>

