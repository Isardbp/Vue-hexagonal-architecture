<template>
    <div class="loader">
        <div class="ball" :style="{ 'background': white ? '#fff' : '#302b63' }"></div>
        <div class="ball" :style="{ 'background': white ? '#fff' : '#302b63' }"></div>
        <div class="ball" :style="{ 'background': white ? '#fff' : '#302b63' }"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "LoadingBalls",
    props: {
        white: {
            default: true,
            type: Boolean
        }
    }
})
</script>

<style>
@import '@/infrastructure/views/styles/loading.scss';
</style>