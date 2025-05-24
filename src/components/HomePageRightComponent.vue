<template>
  <div class="right">
    <el-table :data="users" height="100%">
      <el-table-column label="id" prop="id" width="50px" sortable />
      <el-table-column label="Username" prop="username" sortable />
      <el-table-column label="Time" prop="time" sortable />
      <el-table-column align="right" width="200px">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button class="edit-button" size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import userApi from '../api/UserApi.ts'

const users = ref([])
onMounted(async () => {
  const response = await userApi.getAllUsers()
  users.value = response.data
})
</script>

<style scoped>
.right {
  width: 60vh;
  padding-left: 35px;
}

.el-button {
  width: 80px;
}

.edit-button {
  background-color: var(--gray);
}
</style>
