import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import Post from '@/components/Post'
import Author from '@/components/Author'
import UserCollect from '@/components/UserCollect'
import UserMessage from '@/components/UserMessage'
import Create from '@/components/Create'

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
      path: '/UserMessage',
      name: 'UserMessage',
      component: UserMessage
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
  ]
});
