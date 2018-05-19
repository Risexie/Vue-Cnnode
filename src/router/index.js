import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import GetStart from '@/components/GetStart'
import About from '@/components/About'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/GetStart',
      name: 'GetStart',
      component: GetStart
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    
  
  
    
  ]
});
