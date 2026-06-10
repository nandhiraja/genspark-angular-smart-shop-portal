import { Component, signal } from '@angular/core';
import { isLoggedIn, logout, UserName } from '../../operators/auth.operator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  
  currentUserName = signal<string>("");
  userloginStatus = signal<boolean>(false);
  constructor(){
        UserName.subscribe({
        next:(name)=>{
            this.currentUserName.set(name||"");
            console.log("After name : ",this.currentUserName())
        }
       })
      isLoggedIn.subscribe({
        next:(sts:boolean)=>{
          this.userloginStatus.set(sts)
           console.log("After status : ",this.userloginStatus())
        }
      })
     
  }
  capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
  }


  logout(){
    logout()
  }

}
