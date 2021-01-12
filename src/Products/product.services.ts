import {Injectable} from '@nestjs/common';

import {Product} from './product.model';
@Injectable()
export class ProductService
{

    products: Product[]= [];

    insertProduct(id: string,
         title: string,
        description: string, price: number)
    {
        const prodId = new Date().toString();
        const newProduct= new Product(prodId ,title , description, price);
this.products.push(newProduct);
return this.products;
    }

    getProducts()
    {
        return [...this.products];
    }
}
