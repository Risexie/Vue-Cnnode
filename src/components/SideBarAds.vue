<template>
<div class="innerads">
  <b-card>
    <b-link :href="aliYun"><b-img :src="alYunimg" fluid alt="Responsive image"></b-img></b-link>
    <b-link :href="uCloud"><b-img :src="uCloudimg" fluid alt="Responsive image"></b-img></b-link>
    <b-link :href="x7"><b-img :src="x7img" fluid alt="Responsive image"></b-img></b-link>
    <b-link :href="aliPay"><b-img :src="aliPayimg" fluid alt="Responsive image"></b-img></b-link>
  </b-card>
 </div>

</template>
<script>
export default {
  name: "SideBarAds",
  data:function(){
    return {
      //href
      aliYun:"https://www.aliyun.com/product/nodejs?ref=cnode",
      uCloud:"http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc&utm_campaign=multicloud&utm_content=gift&ytag=cnodejs",
      x7:"http,s://0x7.me/UDyj",
      aliPay:"https://render.alipay.com/p/s/taobaonpm_click/image_25",
      //img 
      alYunimg:'//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_',
      uCloudimg:"//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG",
      x7img:'//dn-cnode.qbox.me/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O',
      aliPayimg:'https://render.alipay.com/p/s/taobaonpm_click/image_25',
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.innerads {
  font-size: 13px;
  padding-top: 15px;
}
img {
  padding: 5px;
}
</style>


