import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cart } from '../interface/cart';

const BASE_URL= 'https://dummyjson.com/carts/user/'
const USER_KEY = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  cart:Cart | undefined
 
  constructor(private httpClient: HttpClient) {
    // const user=this.getCurrentUser();
    // this.getUserCards(user.id)
  }

  getUserCards() {
    const user=this.getCurrentUser();
    console.log(BASE_URL + user.id)
    if(user.id!=null){

      this.httpClient.get<Cart>(BASE_URL + user.id)
      .subscribe((usercart) => {
        this.cart = usercart;
      })
      return this.cart
    }else {
      throw new Error("Invalid");
    }
  }


  getCurrentUser(){
    const user = window.sessionStorage.getItem(USER_KEY)
    console.log('shopcartCurrentUser')
    console.log(user) 
    if(user){
      return JSON.parse(user)
    }
    return {} ;
  }
}


  















interface GetResponse {
  carts: Cart;
}
