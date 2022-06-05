<template>
  <h1>Login</h1>
  <LoginForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from '../components/LoginForm.vue'

export default defineComponent({
  name: "HomeView",
  components: {
    LoginForm
  }
});
</script>