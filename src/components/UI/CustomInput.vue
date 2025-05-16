<template>
  <div class="input__wrapper">
    <el-text class="input__text">{{ label }}</el-text>
    <el-input
      class="input__field"
      :model-value="modelValue"
      @update:modelValue="onInput"
      placeholder="Enter"
      type="string"
      clearable
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  label: {
    type: String,
    default: "Fill me!",
  },
  modelValue: {
    type: String,
    default: "",
  }
});

const emit = defineEmits([ "update:modelValue" ]);

function onInput(value) {
  emit('update:modelValue', value)
}

</script>

<style scoped>
.input__wrapper {
  display: flex;
  align-items: stretch;
  background-color: var(--light-blue-color);
  padding: 20px;
  gap: 10px;
  max-width: 410px;
  max-height: 120px;
}

.input__text {
  background-color: var(--gray);
  padding: 12px 16px;
  color: #333;
  min-width: 120px;
  display: flex;
  align-items: center;
}

.input__field {
  flex: 1;
  /* Выравниваем по высоте обёртку input-а */
  :deep(.el-input__wrapper) {
    height: 100%;
    display: flex;
    align-items: center;
  }
}

</style>
