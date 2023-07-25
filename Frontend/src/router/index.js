import { createRouter,createWebHistory } from'vue-router'
import Layout from '../pages/Layout/index.vue'
import Home from '../pages/Home/index.vue'
import Treehole from '../pages/Treehole/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      component: Layout,
      children:[
        {
          path:'/',
          component: Home
        },
        {
          path:'/treehole',
          component: Treehole
        },
    ]
    }
  ],
  //
  scrollBehavior(){
    return{
      top: 0
    }
  }
})

export default router