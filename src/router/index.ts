import { createRouter, createWebHistory } from 'vue-router'
import{useUserStore} from '@/store'
import routes from './Router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  const store = useUserStore()
  const whilename = ['/login']
  // 登录页不需要token其他页需要携带token
  // 为当前路由页增加标题
  document.title = `DEMO-${to.meta.title}`
  if (!store.user?.access_token && !whilename.includes(to.path)) return{
    path:'/login',
    query:{
      redirect:to.fullPath
    }
  }
})
export default router
