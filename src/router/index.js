import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import GetStart from '@/components/GetStart'
import About from '@/components/About'
import SignIn from '@/components/SignIn'
import GoodContent from '@/components/GoodContent'
import AskContent from '@/components/AskContent'
import TestContent from '@/components/TestContent'
import JobContent from '@/components/JobContent'
import ShareContent from '@/components/ShareContent'

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
    {
      path: '/GoodContent',
      name: 'GoodContent',
      component: GoodContent
    },
    {
      path: '/AskContent',
      name: 'AskContent',
      component: AskContent
    },
    {
      path: '/JobContent',
      name: 'JobContent',
      component: JobContent
    },
    {
      path: '/TestContent',
      name: 'TestContent',
      component: TestContent
    },
    {
      path: '/ShareContent',
      name: 'ShareContent',
      component: ShareContent
    },
  
  
    
  ]
});
