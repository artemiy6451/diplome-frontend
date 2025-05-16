<template>
  <div class="left-side">
    <div class="data__wrapper">
      <CustomInput
        class="custom-input"
        v-model="username"
        label="Номер"
      />
      <TotalTime
        class="total-time"
        label="Время"
      />
    </div>
    <div class="button__wrapper">
      <el-button type="danger" size='large'>Отменить</el-button>
      <el-button type="success" size='large'>Подтвердить</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomInput from '../components/UI/CustomInput.vue'
import TotalTime from '../components/UI/TotalTime.vue'
import { ref } from 'vue'

const username = ref("")

</script>

<style scoped>
.left-side {
  max-width: 400px;
  margin-right: 35px;
}

.custom-input {
  margin-bottom: 40px;
}

.data__wrapper {
  margin-bottom: 40px;
}

.button__wrapper {
  display: flex;
  justify-content: space-between;
}


</style>
