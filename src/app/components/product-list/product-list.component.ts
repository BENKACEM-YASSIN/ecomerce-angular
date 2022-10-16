import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [
    './product-list.component.css',
    '../../utilities.css',
    '../../main.css',
  ],
})
export class ProductListComponent implements OnInit,OnDestroy {
  products: Product[] = [];
  productSubscription : Subscription | undefined ;
  productsByCategory: Product[] = [];
  singleProduct: Product[] = [];
  searchedProduct: Product[] = [];
  constructor(private productService: ProductService,private router : Router) { }

  ngOnInit(): void {
    this.getListProduct();
    this.getListProductByCategory();
    // this.getSingleProduct();
  }

  getListProduct() {
    let i = 0;
    this.productSubscription=this.productService
      .getProductList(Math.floor(Math.random() * 95))
      .subscribe((productList: Product[]) => {
        // avoid 2 query by getting two addtionel Product
        this.singleProduct = productList.splice(-2);
        this.products = productList;
      });
  }
  // getSingleProduct() {
  //       for (const list of [this.productsByCategory,this.products]) {
  //         this.singleProduct.push(list[0]);
  //         list.shift()
  //         alert(this.products.length)
  //       }

  // }

  getListProductByCategory() {
    this.productSubscription=this.productService
      .getProductByCategory()
      .subscribe((productList: Product[]) => {
        this.productsByCategory = productList;
      });
  }



  getSearchedProduct(param: string) {

    this.productSubscription=this.productService
      .getAllProducts()
      .subscribe((productList: Product[]) => {    //mapping from json to Product obj
        this.searchedProduct = this.filterData(param, productList);
      });
    console.log(this.searchedProduct)

  }
  filterData(extraArgs: string, ls: Product[]) {
    const arrayQuery = extraArgs.split(" ")
    // arrayQuery.every((item) => myString.includes(item))
    var newArray = this.products.filter(function (el) {
      var description = el.description
      return arrayQuery.every((item) => description.includes(item))
      // return el.description.every((item) => description.includes(item))
    });
    return newArray
  }

  goToProductItem(product : Product) : void {
    this.router.navigateByUrl('/product-detail/'+product.id, {state : {product : JSON.stringify(product)}});
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}



// https://www.fwait.com/how-to-check-if-string-contains-multiple-values-in-javascript/
// var newArray = homes.filter(function (el) {
//   return el.price <= 1000 &&
//          el.sqft >= 500 &&
//          el.num_of_beds >=2 &&
//          el.num_of_baths >= 2.5;
// });
