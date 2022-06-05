<template>
    <h1>Login</h1>
    <p>user</p>
    <input type="text" v-model="loginForm.user"/>
    <br><br>
    <p>password</p>
    <input type="password" v-model="loginForm.password"/>
    <br><br>
    <button @click="() => { handleLogIn(loginForm) }">Login</button>
    <br><br>
    {{loginForm}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserLogin } from "@/domain/models/User"
import { userService } from "@/domain/services/User.service";

type DataProps = {
    loginForm: {
        user: string | null,
        password: string | null
    }
};

export default defineComponent({
  name: "HomeView",
  data(): DataProps {
    return {
      loginForm: {
          user: null,
          password: null
      },
    };
  },
  methods: {
      handleLogIn(user: UserLogin) {
          userService.login(user)
      }
  }
});
</script>