<template>
<div class="footer">
<b-container>
  <b-row>
    <b-col md="12">
   <b-link href="">Rss|</b-link><b-link :href="codeHref">源码地址</b-link>
   <div class="footerAd">
   <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
   <p>服务器赞助商为<b-link :href="supportHref"><b-img :src="supportImg" fluid alt="Fluid image"></b-img></b-link>
   ,储存赞助商为<b-link :href="saveHref"><b-img :src="saveImg" width="115px"></b-img></b-link>
   ，由<b-link :href="performanceHref"><b-img :src="performanceImg" fluid alt="Fluid image"></b-img></b-link>
   提供应用性能服务。
   新手搭建Node.js服务器，推荐使用无需备案的 <b-link :href="href">DigitalOcean(https://www.digitalocean.com/)</b-link>
   </p>
   </div>
   </b-col>
  </b-row>
</b-container>
</div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
    //href
    codeHref:"https://github.com/cnodejs/nodeclub/",
    supportHref:'http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo',
    saveHref:"http://www.qiniu.com/?ref=cnode",
    performanceHref:'https://www.aliyun.com/product/nodejs?ref=cnode',
    href:'https://www.digitalocean.com/?refcode=eba02656eeb3',
    //img
    supportImg:'//dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9',
    saveImg:'//dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX',
    performanceImg:'//dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD',
    };
  }
};
</script>
<style scoped>
.footerAd {
  color: #ababab;
  font-size: 13px;
  line-height: 2em;
}
.footer {
  background-color: white;
  padding-top: 20px;
}
</style>

