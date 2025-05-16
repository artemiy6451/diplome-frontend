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
        :time=time
      />
    </div>
    <div class="button__wrapper">
      <el-button type="danger" size='large' @click="cancel()">Отменить</el-button>
      <el-button type="success" size='large' @click="addTime()">Подтвердить</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomInput from '../components/UI/CustomInput.vue'
import TotalTime from '../components/UI/TotalTime.vue'
import userApi from '../api/UserApi.ts'
import {ref} from "vue"

const props = defineProps<{
  time: number,
}>()

const emit = defineEmits([ "update:time" ]);

const username = ref('')

function cancel() {
  username.value = ''
  emit("update:time", 0)
}

async function addTime() {
  await userApi.addTime({username: username.value, time: props.time})
  cancel()
}

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
