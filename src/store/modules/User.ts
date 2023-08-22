/* 
  创建一个用户仓库
*/

import { defineStore } from 'pinia'
import { ref } from 'vue'
//  interface 中的类型可以是少部分
interface userinfo {
  access_token:string,
  token_type:string,
  refresh_token:string,
  expires_in:number,
  user_id:string
}
// 存储用户信息
export const useUserStore =defineStore('htmag-user',()=>{
  // 用户信息 采用as给初始值赋值
  const user = ref<userinfo>({} as userinfo)
   // 存储用户信息
   const getUserinfo = (userdata: userinfo) => {
    user.value = userdata
  }
      // 清空用户信息
  const delsuerinfo = () => {
    // 将一个有类型的type直接赋值为空会报错，可采用as进行重新定义类型
    user.value = {} as userinfo
  }
  return {
    user,
    getUserinfo,
    delsuerinfo
  }
},
{
  // 开启持久化存储
  persist: true
})