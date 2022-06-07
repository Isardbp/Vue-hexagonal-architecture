<template>
  <form @submit.prevent="
    () => {
      handleRegister(RegisterForm);
    }
  ">
    <label for="chk" aria-hidden="true">Register</label>
    <div v-if="!loading">
      <input id="user-mail" type="email" name="email" placeholder="Email" v-model="RegisterForm.email" />
      <input class="user-password" type="password" name="pswd" placeholder="Password" v-model="RegisterForm.password" />
      <input class="user-password" type="password" name="pswd" placeholder="Repeat Password"
        v-model="RegisterForm.password_confirmation" />
      <button>Register</button>
    </div>
    <LoadingBalls :white="false" v-else />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserRegister } from "@/domain/models/User";
import { userService } from "@/domain/services/User.service";
import LoadingBalls from "./LoadingBalls.vue"

type DataProps = {
  RegisterForm: UserRegister;
  loading: boolean;
};

export default defineComponent({
  name: "RegisterForm",
  components: {
    LoadingBalls
  },
  data(): DataProps {
    return {
      RegisterForm: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      loading: false
    };
  },
  methods: {
    handleRegister(user: UserRegister) {
      this.loading = true
      userService.register(user).catch(() => {
        this.loading = false;
      });
    },
  },
});
</script>
