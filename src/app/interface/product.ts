export interface Product {
    
    id:number,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    title:string,
    description:string,
    brand:string,
    category:string,
    // category:Array<Category>[],
    thumbnail:string,
    images:Array<string>[]
}
