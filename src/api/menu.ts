import request from "@/utils/requests";
export  const getMenuAPI =()=>{
   return request({
    url:"boss/menu/getAll",
    method:"GET"
   })
}
 