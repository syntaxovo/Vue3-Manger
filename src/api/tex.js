import  request from '../utils/requests'
export const textapi = ()=>{
  return request({
    url:"front/ad/getAdList",
    method:'GET'
  })
}