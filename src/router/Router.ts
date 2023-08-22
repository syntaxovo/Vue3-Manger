 const routes = [
  {
    path: '/',
    component:()=>import ("@/components/Layout/index.vue"),
    children:[
      {
        path:'/LimitsManger',
        component:()=>import ("@/components/Layout/Text.vue"),
        meta:{
          title:'权限管理',
        },
        redirect:'/LimitsManger/menu'
      },
      {
        path:'/LimitsManger/menu',
        component:()=>import ("@/view/Limits/MenuManger.vue"),
        meta:{
          title:'菜单管理'
        }
      },  
      { 
        path:'/LimitsManger/2',
        component:()=>import ("@/components/Layout/Text.vue"),
        meta:{
          title:'权限管理'
        }
      },
      {
        path:'/LimitsManger/3',
        component:()=>import ("@/components/Layout/Text.vue"),
        meta:{
          title:'权限管理'
        }
      },
      {
        title:'用户管理',
        component:()=>import ("@/components/Layout/Text.vue"),
        path:'/UserManger', 
      }
      ,
      {
        title:'课程管理',
        component:()=>import ("@/components/Layout/Text.vue"),
        path:'/CourseManger', 
      },
      {
        title:'广告管理',
        component:()=>import ("@/components/Layout/Text.vue"),
        path:'/AdvertisementManger',
      },
      {
        title:'广告管理1',
        component:()=>import ("@/components/Layout/Text.vue"),
        path:'/AdvertisementManger/1',
      },
      {
        title:'广告管理2',
        component:()=>import ("@/components/Layout/Text.vue"),
        path:'/AdvertisementManger/2',
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../view/Login/index.vue'),
    meta:{
      title:'登录'
    }
    }
]

export default routes