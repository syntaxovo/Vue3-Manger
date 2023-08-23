<script setup lang="ts">
  import {getMenuAPI} from '@/api/menu.ts'
  const menu = ref([])
  const getmenu = async()=>{
    const {data:res} = await getMenuAPI()
    menu.value = res.data
    console.log(res);
  }
  //获取全部菜单
  getmenu();
  //  当前项进行编辑
  const handleEdit = (index,row)=>{
  }
  // 当前项进行删除
  const handleDelete=(index,row)=>{

  }
</script>
<template>
  <div class="top">
    <el-button  type="primary">新增菜单</el-button>
  </div>
  <div class="containertable">
    <el-table :data="menu" style="width: 100%">
    <el-table-column label="createdBy" width="180" prop="createdBy" >
    </el-table-column>
    <el-table-column label="createdTime" width="180" prop="createdTime">
    </el-table-column>
    <el-table-column label="description" width="180" prop="description">
    </el-table-column>
    <el-table-column label="updatedTime" width="180"  prop="updatedTime">
    </el-table-column>
    <el-table-column label="name" width="180"  prop="name">
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<style lang="scss" scoped>
.containertable{
  height: 100vh;
  overflow: auto;
}
</style>