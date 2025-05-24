<template>
  <el-row class="row">
    <el-col :span="6">
      <el-statistic title="Оставшееся время" :value="190" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Время сессии" :value="21" />
    </el-col>
  </el-row>
  <el-row class="row_1">
    <el-col :span="6">
      <el-statistic title="Общее количество потраченного времени" :value="183691" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Среденее время использования за день" :value="1086" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Среденее время использования за неделю" :value="7347" />
    </el-col>
    <el-col :span="6">
      <el-statistic title="Среденее время использования за месяц" :value="7347" />
    </el-col>
  </el-row>

  <el-row class="row_2">
    <el-col :span="6">
      <el-text class="statistic__day_of_week_content">Самый посещаемый день недели <br>
        <el-text class="statistic__day_of_week_text">
          Sunday
        </el-text>
      </el-text>
    </el-col>
    <el-col :span="6">
      <el-text class="statistic__day_of_week_content">Самое посещаемое время суток <br>
        <el-text class="statistic__day_of_week_text">
          00:00
        </el-text>
      </el-text>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
</script>

<style scoped>
.el-col {
  text-align: center;
}

::v-deep(.el-statistic__head) {
  font-size: 26px;
}

::v-deep(.el-statistic__content) {
  font-size: 40px;
  font-style: bold;
}

.statistic__day_of_week_content {
  font-size: 26px;
}

.statistic__day_of_week_text{
  font-size: 40px;
}

.row {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.row_1 {
  margin-top: 60px;
  margin-bottom: 60px;
}

.row_2 {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
</style>
