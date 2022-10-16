import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interface/cart';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  cart:Cart | undefined
  
  ngOnInit(): void {
    this.getUserCards()
  }
  // cartSubscription: Subscription | undefined
  // cartServiceSubscription: Subscription | undefined
  // isLogged=true
  // shopingCartService: ShopingCartService | undefined ;

  constructor(private serviceShoping:ShopingCartService) { }
  getUserCards(){
    this.cart=this.serviceShoping.getUserCards()
  }
  // ngOnInit(): void {
  // }
  // getUserCards(){
    
  //   this.cartSubscription=this.shopingCartService
  //     .getUserCards()
  //     .subscribe((usercart) => {
  //       this.cart = usercart;
  //       console.log('this.cart')
  //       console.log(this.cart)
  //     })
  //   }
}
