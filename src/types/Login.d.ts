// 登录表单类型
export type LoginForm = {
   phone: string,
   password: string
}
// 登录成功返回的信息
export type LoginMes = {
   success: boolean,
   state: int,
   message: string,
   content: string
}
// 用户基本信息
export type userinfo = {
   success: boolean,
   message: string,
   state: number,
   content: {
      isUpdatedPassword: boolean,
      portrait: string,
      userName: string
   }
}
// token 信息
export type token = {
   message: string,
   state: number,
   success: boolean,
   content: string
}
