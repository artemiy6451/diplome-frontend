<template>
  <div class="time__wrapper">
    <el-text class="time__text">{{label}}</el-text>
    <el-text class="total__time">{{time}}</el-text>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  label: {
    type: String,
    default: "Fill me!"
  },
  time: {
    type: Date,
    default: 0

  },
});

</script>

<style scoped>
.time__wrapper {
  display: flex;
  align-items: stretch;
  background-color: var(--light-blue-color);
  padding: 20px;
  gap: 10px;
  max-width: 410px;
  max-height: 120px;
}

.time__text {
  background-color: var(--gray);
  padding: 12px 16px;
  color: #333;
  min-width: 120px;
  display: flex;
  align-items: center;
}

.total__time {
  background-color: #fff;
  padding: 12px 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
