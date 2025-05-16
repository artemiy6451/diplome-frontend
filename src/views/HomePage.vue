<template>
  <HeaderComponent
    class="header-component"
  />
  <div class="content">
    <HomePageLeftSideComponent />
    <HomePageCenterComponent />
    <HomePageRightComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import HomePageLeftSideComponent from "../components/HomePageLeftSideComponent.vue"
import HomePageCenterComponent from "../components/HomePageCenterComponent.vue"
import HomePageRightComponent from "../components/HomePageRightComponent.vue"

</script>

<style scoped>
.content {
  display: flex;
  margin-top: 63px;
  margin-left: 120px;
  margin-right: 120px;
  height: 80vh;
}

</style>
