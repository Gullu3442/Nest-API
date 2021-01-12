import { Controller, Post, Body, Get } from "@nestjs/common";

import {ProductService} from './product.services';
@Controller('Products')
export class ProductController

{

    constructor(private readonly productService: ProductService){}
    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number):any{

        const prodId = new Date().toString();
 return this.productService.insertProduct(prodId, prodTitle, prodDesc, prodPrice);

    }

    @Get()
    getAllProd()
    {
        return this.productService.getProducts();

    }
}