<template>
  <form @submit.prevent="
    () => {
      handleLogIn(loginForm);
    }
  ">
    <label for="chk" aria-hidden="true">Login</label>
    <div v-if="!loading">
      <input id="user-email" type="email" name="email" placeholder="Email" v-model="loginForm.email" />
      <input class="user-password" type="password" name="pswd" placeholder="Password" v-model="loginForm.password" />
      <button>Login</button>
    </div>
    <LoadingBalls :white="true" v-else />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserLogin } from "@/domain/models/User";
import { userService } from "@/domain/services/User.service";
import LoadingBalls from "./LoadingBalls.vue"

type DataProps = {
  loginForm: UserLogin;
  loading: boolean;
};

export default defineComponent({
  name: "LoginForm",
  components: {
    LoadingBalls
  },
  data(): DataProps {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      loading: false
    };
  },
  methods: {
    handleLogIn(user: UserLogin) {
      this.loading = true
      userService.login(user).catch(() => {
        this.loading = false;
      });
    },
  },
});
</script>
