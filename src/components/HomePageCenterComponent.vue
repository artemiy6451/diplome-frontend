<template>
  <div class="center">
    <el-text class="center__text" size="large">Выберите нужное время</el-text>
    <div class="center__buttons">
      <div class="center__buttons-firstline">
        <el-button type='primary'>5 мин.</el-button>
        <el-button type='primary'>15 мин.</el-button>
        <el-button type='primary'>30 мин.</el-button>
        <el-button type='primary'>45 мин.</el-button>
      </div>
      <div class="center__buttons-secondline">
        <el-button type='primary'>1ч.</el-button>
        <el-button type='primary'>2ч.</el-button>
        <el-button type='primary'>3ч.</el-button>
        <el-button type='primary'>5ч.</el-button>
      </div>
      <div class="center__time-picker">
        <el-time-picker
          @update:customTime="onInput"
          :model-value="modelValue"
          size="large"
          arrow-control
        />
      </div>
      <div class="center__confirm-button__wrapper">
        <el-button class="center__confirm-button" size="large" color="#7158FF">Принять</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: Date,
    default: new Date(0,0,0,0,0)
  }
});

const emit = defineEmits([ "update:modelValue" ]);

function onInput(value) {
  emit('update:modelValue', value)
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
