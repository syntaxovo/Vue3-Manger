import  request from '../utils/requests'
import {LoginForm,LoginMes,userinfo,token} from '../types/Login'
// 用户登录
export const loginapi = (data:LoginForm)=>{
  return request<LoginMes>({
    url:"front/user/login",
    method:'POST',
    data
  })
}
// 获取用户信息
export const  getUserApi = ()=>{
  return request<userinfo>({
    url:"front/user/getInfo",
    method:'GET',
  })
}
//  TOKEN 刷新
export const  refreshTokenApi = (params:any)=>{
  return request<token>({
    url:"front/user/refresh_token",
    method:'POST',
    params
  })
}