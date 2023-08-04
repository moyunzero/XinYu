import { createRouter,createWebHistory } from'vue-router'
// import Layout from '../pages/Layout/index.vue'
// import Home from '../pages/Home/index.vue'
// import Treehole from '../pages/Treehole/index.vue'
// import Subscribe  from '../pages/Subscribe/index.vue'
// import Article from '../pages/Article/index.vue'
// import Test from '../pages/Test/index.vue'
// import Blanck from '../pages/blanck.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      component: ()=> import('../pages/Layout/index.vue'),
      children:[
        {
          path:'/',
          component: ()=> import('../pages/Home/index.vue'),
        },
        {
          path:'/treehole',
          component: ()=> import('../pages/Treehole/index.vue')
        },
        {
          path:'/subscribe',
          component: ()=> import('../pages/Subscribe/index.vue')
        },
        {
          path:'/article',
          component: ()=> import('../pages/Article/index.vue')
        },
        {
          path:'/test',
          component: ()=> import('../pages/Test/index.vue')
        },
        {
          path:'/noinfo',
          component:()=> import('../pages/blanck.vue')
        }
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