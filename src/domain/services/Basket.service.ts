import { Product } from '../models/Product'
import { Basket } from '../models/Basket'
import { generateUid } from '@/infrastructure/plugins/uid/uid'

const hasProduct = (basket: Basket, product: Product) =>
  basket.items.find((item) => item.id === product.id)

const createBasket = (product: Product) => ({
  id: generateUid(),
  items: [product]
})

const increaseBasket = (basket: Basket, product: Product): Basket => ({
  ...basket,
  items: [...basket.items, product]
})

const decrestBasket = (basket: Basket, product: Product): Basket => {
  console.log(product)
  const newBasket = basket.items.filter(item => item.id !== product.id)

  return {
    ...basket,
    items: newBasket
  }
}

const addProductToBasket = (product: Product, basket?: Basket | null): Basket =>
  basket
    ? hasProduct(basket, product)
      ? basket
      : increaseBasket(basket, product)
    : createBasket(product)

const deleteProductFromBasket = (product: Product, basket?: Basket | null): Basket | null =>
  basket
    ? hasProduct(basket, product)
      ? decrestBasket(basket, product)
      : basket
    : null

export const basketService = {
  addProductToBasket,
  deleteProductFromBasket
}