<template>
  <div id="loginbody">
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true">

      <div class="login">
        <LoginForm />
      </div>

      <div class="register">
        <RegisterForm />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

export default defineComponent({
  name: "AuthView",
  components: {
    LoginForm,
    RegisterForm
  },
});
</script>

<style lang="scss">
  @import '@/infrastructure/views/styles/auth.scss';
</style>