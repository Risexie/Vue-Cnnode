import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import Post from '@/components/Post'
import Author from '@/components/Author'
import UserCollect from '@/components/UserCollect'
import Message from '@/components/Message'
import Create from '@/components/Create'
import EditPassage from '@/components/EditPassage'

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
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/EditPassage/:id',
      name: 'EditPassage',
      component: EditPassage
    },
  ]
});
