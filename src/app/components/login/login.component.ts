import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginSubscription : Subscription | any ; 
  isLoginSuccessful: boolean | null = null   ; 

  constructor(
    private loginService : LoginService , 
    private tokenService : LoginService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  loginAction(login : any){
    const loginValues = {
      username  : login.form.value.username , 
      password : login.form.value.password,
    }
    this.loginSubscription = this.loginService.login(loginValues.username,loginValues.password).subscribe(
      (value : any) =>{
        console.log('value')
        console.log(value)
        this.tokenService.saveToken(value.token) ;
        const userConnected =  { 
          username : value.username,
          'email' : value.email,
          // 'phone':value.phone,
          'id':value.id,
        }
        console.log('userconnected from login action')
        console.log(userConnected )
        this.tokenService.saveUser(userConnected)
        this.isLoginSuccessful = true ; 
        this.router.navigateByUrl('');
      },
      (error : any) =>{
        this.isLoginSuccessful = false ;
      }
    )
  }

}
