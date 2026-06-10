import { Component, signal } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { updateUserLoggedInStatus, UpdateUserName } from '../../operators/auth.operator';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginModel = signal(new LoginModel())
  constructor(private authService:AuthService, private router:Router){

  }

  
  handleLoginSubmit(router: Router=this.router){

    console.log("username:  ",this.loginModel().username , "passwoerd : ",this.loginModel().password);
    console.log("Making api call.. ");

    this.authService.loginApiCall(this.loginModel()).subscribe({
    next(resp:any){
     console.log("LoginSuccessfuly");
     window.alert("Login Successfull")

     sessionStorage.setItem("accessToken",resp.accessToken);
     sessionStorage.setItem("refreshToken",resp.refreshToken);
     
     UpdateUserName();
     updateUserLoggedInStatus();
    router.navigate([''])
    },
    error(err){
      console.log("LoginFailed");
      window.alert("Login failed")
      console.error(err);
    }
  })
  
  }
  
}



