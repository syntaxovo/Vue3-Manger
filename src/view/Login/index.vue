<script setup lang="ts">
import {ref} from 'vue'
// 引入定义的表单类型
import {LoginForm} from '../../types/Login'
import type { FormInstance, FormRules } from 'element-plus'
// 引入登录接口
import {loginapi} from '../../api/login'
import { useRoute,useRouter } from 'vue-router'
const route= useRoute()
const router = useRouter()
// 引入store仓库存储用户信息
import { useUserStore } from '@/store/index'
const store = useUserStore()
const form = ref<LoginForm>({
  phone: '18201288771',
  password:'111111'
})

const rules  = ref<FormRules>({
  phone: [ { required: true, message: '请输入手机号',trigger: 'blur' },
  { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确',trigger: 'blur' }],
  password:[
  { required: true, message: '请输入密码' },
  { pattern: /^\w{6,24}$/, message: '密码需6-24个字符' }
  ]
})
// form表单类型
  const formRef = ref<FormInstance>()
  const loginsucdata = ref({
    success:false,
    state: 0,
    message: '',
    content: ''
  })
  // 是否加载中
  const isloading = ref(false)
// 登录
const submitForm =async ()=>{
  // isloading.value = true
  formRef.value?.validate(async (valid)=>{
    if(valid){
    // 进行登录
    const  {data:res} = await loginapi(form.value)
    formRef.value?.resetFields()
    loginsucdata.value =  res
    // 存储token等信息
    ElMessage.success('登录成功')
    store.getUserinfo(JSON.parse(res.content))
    isloading.value = false
    router.push(route.query.redirect as string|| '/')
    }
     else{
        isloading.value = false
        ElMessage.error('表单校验失败')
        formRef.value?.resetFields()
        return false
    }
  })

}
</script>
<template>
   <div style="margin: 20px"  class="contioner">
    <div class="top">
      <h2>用户登录</h2>
    </div>
    <el-form
      label-position="right"
      label-width="100px"
      :rules="rules"
      :model="form"
      ref="formRef"
      style="max-width: 460px"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
     <el-form-item>
      <el-button type="primary" @click="submitForm"
      :loading="isloading"
        >Submit</el-button
      >
    </el-form-item>
    </el-form>
    </div>
</template>

<style lang="scss" scoped>
.contioner{
  position: absolute;
  width: 320px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:  pink;
  .top{
  
    h2{
      text-align: center;
    }
  }
}
</style>