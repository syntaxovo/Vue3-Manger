import axios from 'axios'
import { useUserStore } from '@/store'
import {refreshTokenApi} from '@/api/login'
import router from '@/router'
export let isRefresh = ref<boolean>(false)
const request = axios.create({
  baseURL: '/',
  timeout: 3000
})
//请求拦截器
request.interceptors.request.use((config) => {
  //如果存在token，请求携带token 
  const store = useUserStore()
  if (store.user.access_token){
    config.headers.Authorization = store.user.access_token
  }  
  
  return config;
},
(error) => {
  return Promise.reject(error)
})
  //api接口 响应成功 / 响应失败 【响应拦截器】
  //后端提供：响应码，响应信息，对象
  // 配置响应拦截器
request.interceptors.response.use((res)=>{return res},async(error)=>{
  if(error.response.status == 401 && !isRefresh.value){
    isRefresh.value= true
    // 进行刷新token
    const store = useUserStore()
   const {data} = await refreshTokenApi({
    refreshtoken:store.user.refresh_token
   })
      if(data.success){
        // token 请求成功
        store.getUserinfo(JSON.parse(data.content))
        isRefresh.value = false
         // 并再次去请求之前的接口，返回结果
        return request(error.config)
      }else{
        isRefresh.value = false
        ElMessage.warning('token失效,返回登录页')
        router.push({path:'/login',query:{
          redirect:router.currentRoute.value.fullPath
        }})
      }
  } else {
    return Promise.reject(error)
  }
})
  
 
export default request