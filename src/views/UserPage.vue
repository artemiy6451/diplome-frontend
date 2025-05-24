<template>
  <div>
    <HeaderComponent />
    <UserStatistic />
    <div class="heatmap">
      <CalendarHeatmap
        :values="heatmap"
        :timeData={timeData}
        :end-date="now"
        :round="5"
        :tooltip="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
import HeaderComponent from '../components/HeaderComponent.vue'
import UserStatistic from '../components/UserStatistic.vue'
import userApi from "../api/UserApi.ts"
import { IHeatmapItem } from "../types.ts"
import { ref, onMounted } from "vue"

const heatmap = ref<HeatmapItem[]>([])
const now = ref(new Date().toISOString())
const timeData = ref({})

onMounted(async () => {
  const response = await userApi.getUserInfo("lokach")
  heatmap.value = response.heatmap
  timeData.value = response
})
</script>

<style scoped>
.heatmap {
  max-width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  font-style: italic;
}
</style>
