import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Product } from 'src/app/interface/product';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    '../../utilities.css',
    '../../main.css',
    './navbar.component.css',
]
})
export class NavbarComponent implements OnInit {
  searchedProduct: Product[] = [];
  searchForm: FormGroup | any;
  isLogged : boolean = false ;
  user : any = {}
  // constructor() {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required])
  //   });
  // }
 
  // constructor() {
    //   this.loginForm = new FormGroup({
      //     email: new FormControl('', [Validators.required, Validators.email]),
      //     password: new FormControl('', [Validators.required])
      //   });
      // }

  constructor(private productService: ProductService,loginService : LoginService) {
    this.searchForm = new FormGroup({
          query: new FormControl('', [Validators.required]),
        });
      this.getToken(loginService);
  }

  ngOnInit(): void {
  }

  signOutAction(){
    window.sessionStorage.clear()
    this.isLogged = false ; 
  }

  getToken(loginService : LoginService){
    const token = loginService.getToken();
    if(token){
      this.user = loginService.getUser();
      this.isLogged = true ; 
      
    }
  }

  onSubmit() {
    
      console.log(this._v());
      this.productService
      .getAllProducts()
      .subscribe((productList: Product[]) => {    //mapping from json to Product obj
        
        this.searchedProduct = this.filterData(this._v(),productList);
      });
  }
  _v() {
    return this.searchForm.value.query;
  }

  

 


  

  // searchAction(param : any){
  //   this.productService.

  // }


  // searchAction(param:any) {
  //   const searchValues = {
  //     q  : param.form.value.query , 
  //     // password : login.form.value.password
  //   }
  //   this.productService
  //     .getAllProducts()
  //     .subscribe((productList: Product[]) => {    //mapping from json to Product obj
  //       this.searchedProduct = this.filterData(searchValues.q,productList);
        
  //     });
      
  // }


  filterData(extraArgs:string,ls:Product[]){
    const arrayQuery=extraArgs.split(" ")
    // arrayQuery.every((item) => myString.includes(item))
    var newArray = ls.filter(function (el) {
      var description=el.description
      
      return arrayQuery.every((item) => description.includes(item))
        // return el.description.every((item) => description.includes(item))
    });
    return newArray

  }

}
