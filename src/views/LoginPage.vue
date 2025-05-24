<template>
  <HeaderComponent />
  <div class="form__wrapper">
    <el-form class="form__content" :model="form">
      <el-form-item class="form__title" label="Login">
        <el-input class="form__input" v-model="form.username" />
      </el-form-item>
      <el-form-item class="form__title" label="Password">
        <el-input class="form__input" v-model="form.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import { reactive } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const form = reactive({
  username: "",
  password: "",
})

function submitForm(form) {
  console.log(form)
  if (form.username != "") {
    router.push("/user");
  }
}
</script>

<style scoped>
.form__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
}

.form__content{
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
