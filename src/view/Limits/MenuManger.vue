<script setup lang="ts">
  import {getMenuAPI} from '@/api/menu.ts'
  const menu = ref([])
  const getmenu = async()=>{
    const data = await getMenuAPI()
    console.log(data);
  }
  getmenu()
</script>
<template>
  <div>
    <p>菜单管理</p>
</div>
</template>

<style lang="scss" scoped>
</style>