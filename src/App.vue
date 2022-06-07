<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style>
  @import './infrastructure/views/styles/index.scss';
</style>