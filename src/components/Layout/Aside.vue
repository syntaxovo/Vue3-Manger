<script setup lang="ts" >
  const menulist = [
    {
      name:'权限管理',
      index:'/LimitsManger',
      sub:[
      {
        name:'菜单管理',
        index:'/LimitsManger/menu',
      },
      {
        name:'管理2',
        index:'/LimitsManger/2',
      },{
        name:'管理3',
        index:'/LimitsManger/3',
      }
      ]
    },
    {
      name:'用户管理',
      index:'/UserManger', 
    },
    {
      name:'课程管理',
      index:'/CourseManger', 
    },
    {
      name:'广告管理',
      index:'/AdvertisementManger',
      sub:[
          {
            name:'广告管理1',
            index:'/AdvertisementManger/1',
          },
          {
            name:'广告管理2',
            index:'/AdvertisementManger/2',
          }
      ]
    }
  ]
  import isCollapse from '../../hock/ISExpand'
</script>

<template>
  <div>
    <el-aside :class="isCollapse?'changewidth':''">
      <div class="top">
         <img src="../../assets/vue.svg" alt="">
         <p>没有意思</p>
      </div>
      <el-menu
        class="el-menu-vertical-demo"
        router
        popper-effect="dark"
        :collapse="isCollapse"
      >
      <template v-for="item in menulist" >
          <!-- 如果有二级菜单 -->
        <template v-if="item.sub" >
            <el-sub-menu :index="item.index" :key="item.index">
              <!-- 一级菜单名 -->
              <template #title>
                <el-icon><IEpsearch/></el-icon>
                <span>{{ item.name }}</span>
              </template>
              <!-- 遍历二级菜单 -->
              <template  v-for="subItem in item.sub">
                <el-menu-item :index="subItem.index">
                  <el-icon><IEpSetting /></el-icon>
                 <template #title>
                  {{ subItem.name }}
                 </template>
                </el-menu-item>
              </template>
            </el-sub-menu> 
        </template>
        <!-- 没有二级菜单 -->
        <template v-else>
          <el-menu-item :index="item.index">
            <el-icon><IEpSetting /></el-icon>
              <template #title>
              {{ item.name }}
              </template>
            </el-menu-item>
        </template>
      </template>
    </el-menu>
    </el-aside>
  </div>
</template>


<style lang="scss" scoped>
.changewidth{
  width: 60px;
  p{
    display: none;
  }
}
 
ul.el-menu.el-menu--vertical.el-menu-vertical-demo {
    width: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.top{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
}
.el-aside{
  height: 100vh;
  background-color: bisque;
}
.el-menu,
.el-menu-item{
  background-color: bisque;
  & .is-active{
    background-color: pink;  
  }
  & .el-menu--collapse{
    width:60px
   
  }
}
.el-menu--collapse{
  width:60px
}
.el-sub-menu__title:hover {
    background-color:  blue;
}

</style>