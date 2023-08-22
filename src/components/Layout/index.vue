<template>
  <div class="common-layout">
  <el-container>
      <Aside/>
    <el-container>
      <el-header> 
        <el-scrollbar>
          <Header/>
        </el-scrollbar>
      </el-header>
      <el-main> 
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script setup lang="ts">
import Aside from './Aside.vue';

</script>

<style scoped>
.el-header{
  background-color: #ccc;
 
}
</style>