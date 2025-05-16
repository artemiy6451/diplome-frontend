<template>
  <div class="center">
    <el-text class="center__text" size="large">Выберите нужное время</el-text>
    <div class="center__buttons">
      <div class="center__buttons-firstline">
        <el-button type='primary' :model-value="time" @click="handleClick(5)">5 мин.</el-button>
        <el-button type='primary' @click="handleClick(15)">15 мин.</el-button>
        <el-button type='primary' @click="handleClick(30)">30 мин.</el-button>
        <el-button type='primary' @click="handleClick(45)">45 мин.</el-button>
      </div>
      <div class="center__buttons-secondline">
        <el-button type='primary' @click="handleClick(60)">1ч.</el-button>
        <el-button type='primary' @click="handleClick(120)">2ч.</el-button>
        <el-button type='primary' @click="handleClick(180)">3ч.</el-button>
        <el-button type='primary' @click="handleClick(300)">5ч.</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  time: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits([ "update:modelValue", "update:time" ]);

function onInput(value) {
  emit('update:modelValue', value)
}

function handleClick(time: number) {
  emit('update:time', time)
}

</script>

<style scoped>

.center {
  width: 480px;

  border-left: 1px solid var(--light-blue-color);
  border-right: 1px solid var(--light-blue-color);

  padding-left: 35px;
  padding-right: 35px;
}

.center__text {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;

  font-size: 24px;
  font-style: bold;
}

.center__buttons-firstline, .center__buttons-secondline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.center__buttons-secondline {
  margin-top: 20px;
}

.el-button {
  width: 80px;
}

.center__time-picker {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--light-blue-color);
}

.center__confirm-button__wrapper {
  display: flex;
  justify-content: right;
  margin-top: 45px;
}
</style>
