<template>
    <p>Items on basket: {{ basketItems.length }}</p>
    <p v-for="item of basketItems" :key="item.id">
      {{ item.title }}
      <span
        @click="
          () => {
            onDeleteProduct(item);
          }
        "
        >x</span
      >
      <br />
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "BasketComponent",
    props: {
        basketItems: {type: Object },
        onDeleteProduct: { type: Function },
    }
})
</script>
