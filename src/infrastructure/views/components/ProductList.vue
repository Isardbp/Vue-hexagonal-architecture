<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <button
        @click="
          () => {
            onSelectProduct(product);
          }
        "
      >
        {{ product.title }}
      </button>
      <button
        v-show="
          basketItems && basketItems.find((item) => item.id === product.id)
        "
        @click="
          () => {
            onDeleteProduct(product);
          }
        "
      >
        x
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productService } from "@/domain/services/Product.service";
import { Product } from "@/domain/models/Product";

type DataProps = {
  products: Product[];
};

export default defineComponent({
  name: "ProductList",
  props: {
    onSelectProduct: { type: Function },
    onDeleteProduct: { type: Function },
    basketItems: { type: Array },
  },
  data(): DataProps {
    return {
      products: [],
    };
  },
  mounted() {
    productService.getProducts().then((response) => (this.products = response));
  },
});
</script>