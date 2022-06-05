<template>
  <form
    @submit.prevent="
      () => {
        handleLogIn(loginForm);
      }
    "
  >
    <label for="user-login">user</label>
    <input id="user-login" type="text" v-model="loginForm.user" />
    <label for="user-password">password</label>
    <input id="user-password" type="password" v-model="loginForm.password" />
    <button>Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserLogin } from "@/domain/models/User";
import { userService } from "@/domain/services/User.service";

type DataProps = {
  loginForm: {
    user: string | null;
    password: string | null;
  };
};

export default defineComponent({
  name: "LoginForm",
  data(): DataProps {
    return {
      loginForm: {
        user: null,
        password: null,
      },
    };
  },
  methods: {
    handleLogIn(user: UserLogin) {
      userService.login(user);
    },
  },
});
</script>