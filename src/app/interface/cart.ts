import { Product } from "srcb/app/interface/product";

export interface Cart {


    id: number,
    products: ProductInter[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}


//sorry its 03:00 AM hhhh no time for another ng g interface
export interface ProductInter {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedPrice: number,
}
