import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Product } from '../interface/product';
// import { Product } from '../common/product';

const BASE_URL = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincar-e",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];

  constructor(private httpClient: HttpClient) { }


  getProductList(random: number): Observable<Product[]> {
    return this.getProducts('?limit=6&skip=' + random)
  }

  getProductByCategory(): Observable<Product[]> {
    let random = Math.floor(Math.random() * 20)
    let query = this.categories[random] + '?limit=6'
    return this.getProducts('/category/' + query)
  }
  getAllProducts() {
    return this.getProducts('')
  }

  getProduct(id: number): Observable<Product> {
    
    return this.httpClient.get<Product>(BASE_URL + '/' + id);
  }
  getProducts(extraArgs: any) {
    console.log(BASE_URL + extraArgs)
    return this.httpClient.get<GetResponse>(BASE_URL + extraArgs).pipe(
      map(response => response.products)
    )
  }
}



interface GetResponse {
  products: Product[];
}












