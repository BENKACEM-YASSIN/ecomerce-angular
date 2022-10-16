import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Cart } from 'src/app/interface/cart';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';

const USER_KEY = 'auth-user'

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  cartSubscription: Subscription | undefined
  cartServiceSubscription: Subscription | undefined
  isLogged=true
  // userCarts:Cart | undefined
  cart:Cart | undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopingCartService:ShopingCartService
    ) { }

  ngOnInit(): void {
    this.getUserCards();
  }
  getUserCards(){
     this.cart=this.shopingCartService.getUserCards()
       
      // localStorage.setItem("names", JSON.stringify());
      // , (error: any) => {
      //   console.log(error)
      // });
      // console.log(this.userCarts)
    
    
    // return window.sessionStorage.getItem(TOKEN_KEY)
    // this.cartSubscription = this.activatedRoute.paramMap.subscribe(
    //   (result: any) => {

    //     if (window.history.state.cart) {
    //       this.cart = JSON.parse(window.history.state.cart)
    //     } else {
          

          
          
    //     }

    //   }
    // )

  }

  
  


  
  

//   fetch('https://dummyjson.com/carts/user/5')
// .then(res => res.json())
// .then(console.log);

// {
//   "carts": [
//     {
//       "id": 19,
//       "products": [
//         {
  //           "id": 43,
  //           "title": "frock gold printed",
//           "price": 600,
//           "quantity": 3,
//           "total": 1800,
//           "discountPercentage": 15.55,
//           "discountedPrice": 1520
//         },
//         {...}
//         // more products
//       ],
//       "total": 2492,
//       "discountedTotal": 2140,
//       "userId": 5, // user id is 5
//       "totalProducts": 5,
//       "totalQuantity": 14
//     }
//   ],
//   "total": 1,
//   "skip": 0,
//   "limit": 1
// }

}

  