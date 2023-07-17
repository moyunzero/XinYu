import { createRouter,createWebHistory } from'vue-router'
import Layout from '../pages/Layout/index.vue'
import Home from '../pages/Home/index.vue'


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