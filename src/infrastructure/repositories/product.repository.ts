import { http } from '../plugins/http/http'
import { ProductDTO } from '../../infrastructure/dto/ProductDTO'
import { Product } from '../../domain/models/Product'

export const productRepository = {
    getProducts: async () => {
        //const products = await http.get<ProductDTO[]>('http://localhost:3001/products')

        const products:ProductDTO[]  = [
            {
                product_id: "1",
                title: "test",
                description: "test description",
                price: "99",
            },
            {
                product_id: "2",
                title: "test2",
                description: "test2 description",
                price: "199",
            }
        ]

        // we can extract this transform to a function inside this file to be reused by different methods
        return products.map((productDto): Product => ({
            id: productDto.product_id,
            title: productDto.title,
            price: Number(productDto.price)
        }))
    }
}
