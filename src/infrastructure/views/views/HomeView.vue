<template>
  <button @click="() => {
    handleLogout()
  }">
    Logout
  </button>
  <ProductList
    :basket-items="basket?.items"
    :on-select-product="handleAddToCart"
    :on-delete-product="handleDeleteFromCart"
  />
  <BasketComponent
    v-if="basket"
    :basketItems="basket?.items"
    :onDeleteProduct="handleDeleteFromCart"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
/* import Main from './infrastructure/components/Main.vue'*/
import ProductList from "@/infrastructure/views/components/ProductList.vue";
import { Product } from "@/domain/models/Product";
import { basketService } from "@/domain/services/Basket.service";
import { Basket } from "@/domain/models/Basket";
import BasketComponent from "@/infrastructure/views/components/Basket.vue";
import { userService } from "@/domain/services/User.service";

type DataProps = {
  basket: Basket | null;
};

export default defineComponent({
  name: "HomeView",
  components: {
    ProductList,
    BasketComponent,
  },
  methods: {
    handleAddToCart(product: Product) {
      this.basket = basketService.addProductToBasket(product, this.basket);
    },
    handleDeleteFromCart(product: Product) {
      this.basket = basketService.deleteProductFromBasket(product, this.basket);
    },
    handleLogout() {
      userService.logout()
    }
  },
  data(): DataProps {
    return {
      basket: null,
    };
  },
  mounted() {
    this.basket = null;
  },
});
</script>