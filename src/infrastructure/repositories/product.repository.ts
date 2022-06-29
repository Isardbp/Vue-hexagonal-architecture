// product.repository.ts

import { http } from '../plugins/http/http'
import { ProductDTO } from '../../infrastructure/dto/ProductDTO'
import { Product } from '../../domain/models/Product'
import { getProducts } from '../urls'

export const productRepository = {
    getProducts: async () => {
        const products = await http.get<ProductDTO[]>(getProducts)

        return products.map((productDto): Product => ({
            id: productDto.product_id,
            title: productDto.title,
            price: Number(productDto.price)
        }))
    }
}


