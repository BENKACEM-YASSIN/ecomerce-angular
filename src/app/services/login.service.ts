import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  // constructor(private http: HttpClient) { }

  // login(username: string, password: string): any {
  //   const loginValue = {
  //     username: username,
  //     password: password
  //   }
  //   return this.http.post('https://dummyjson.com/auth/login',loginValue);
  // }
  constructor(private http: HttpClient) { }

  public saveToken(token : string) :void {
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.setItem(TOKEN_KEY , token)
  }

  public getToken() : string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }


  public saveUser(user : any ){ // {id : 15 , userName : 'James'}
    console.log('fromsaveuser')
    console.log(user)
    
    window.sessionStorage.removeItem(USER_KEY)
    window.sessionStorage.setItem(USER_KEY , JSON.stringify(user))
    
  }

  public getUser(){
    // var , let , const 
    const user = window.sessionStorage.getItem(USER_KEY)
    console.log('fromgetuser')
    console.log(user) 
    if(user){
      return JSON.parse(user)
    }
    return {} ;
  }

  signOut() : void  {
    window.sessionStorage.clear()
  }
  login(username: string, password: string): any {
    const loginValue = {
      username: username,
      password: password
    }
    return this.http.post('https://dummyjson.com/auth/login',loginValue);
  }

}










  // return this.http.post('https://fakestoreapi.com/auth/login',loginValue);