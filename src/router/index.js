import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import Post from '@/components/Post'
import Author from '@/components/Author'
import UserCollect from '@/components/UserCollect'
import UserMessage from '@/components/UserMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/Author/:id',
      name: 'Author',
      component: Author
    },
    {
      path: '/UserCollect/:id',
      name: 'UserCollect',
      component: UserCollect
    },
    {
      path: '/UserMessage/:id',
      name: 'UserMessage',
      component: UserMessage
    },
  ]
});
