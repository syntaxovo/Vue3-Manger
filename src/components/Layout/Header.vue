<template>
  <div class="header">
    <el-icon @click="expand = !expand" >
       <IEpExpand  v-if="expand"/>
       <IEpFold v-else/>
    </el-icon>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">promotion management</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar
        :src= "userinfo?.content?.portrait"
      />
    </span>
    <template #dropdown>
      <el-dropdown-menu> 
        <el-dropdown-item> {{ userinfo?.content?.userName }}</el-dropdown-item>
        <el-dropdown-item @click="goout"> 退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import expand from '../../hock/ISExpand'
import {getUserApi} from '@/api/login'
import  type {userinfo} from '@/types/Login'
import { useUserStore } from '@/store';
const store  = useUserStore()
import type { Action } from 'element-plus'
import { useRouter } from 'vue-router';
const router = useRouter()

const userinfo = ref<userinfo>({} as userinfo)
 const getlist = async ()=>{
 const {data:res} =await getUserApi()
 userinfo.value = res
 }
 onMounted(() => {
  getlist()
 })
//  退出登录
 const goout = ()=>{
  ElMessageBox.confirm(
    '确定退出',
    'Confirm',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message:  '退出成功',
      })
      store.delsuerinfo()
      router.push('/login')
    })
    .catch((action: Action) => {
      ElMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? '已取消'
            : '已取消',
      })
    })
    
 }
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  .el-dropdown{
    margin-left: auto;
  }
}
</style>