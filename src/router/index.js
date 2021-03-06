import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Transfer from '../views/Transfer'
import Popover from '../views/Popover'
import Clip from '../views/Clip.vue'
import ImageViewer from '../views/ImageViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/transfer',
      name: 'Transfer',
      component: Transfer
    },
    {
      path: '/popover',
      name: 'Popover',
      component: Popover
    },
    {
      path: '/clip',
      name: 'Clip',
      component: Clip
    },
    {
      path: '/viewer',
      name: 'ImageViewer',
      component: ImageViewer
    }
  ]
})
