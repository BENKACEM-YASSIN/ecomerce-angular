import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productSubscription: Subscription | undefined
  productServiceSubscription: Subscription | undefined
  relatedProducts: Product[] | undefined;

  // to avoid problems cause null safty
  product: Product = {

    id: 0,
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    title: '',
    description: '',
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail() {
    this.productSubscription = this.activatedRoute.paramMap.subscribe(
      (result: any) => {
        if (window.history.state.product) {
          this.product = JSON.parse(window.history.state.product)
          this.getRelatedProducts();
        } else {
          this.productService.getProduct(result.params.id).subscribe(
            (productItem) => {
              this.product = productItem;
              console.log('this.product 222')
              console.log(this.product)
              this.getRelatedProducts();

            }
          )
        }

      }
    )
  }
  getRelatedProducts() {
    console.log('this.product')
    console.log(this.product)
    if (this.product.category != '') {
      this.productSubscription = this.productService
        .getProducts(`/category/${this.product.category}?limit=4`)
        .subscribe((productList: Product[]) => {
          this.relatedProducts = productList;
        }
        // , (error: any) => {
        //   console.log(error)
        // }
        );
    }
  }
  ngOnDestroy(): void {
    this.productServiceSubscription?.unsubscribe()
    this.productSubscription?.unsubscribe()
  }

}
