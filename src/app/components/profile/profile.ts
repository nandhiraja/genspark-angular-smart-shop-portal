import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { ProfileModel } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profile = signal(new ProfileModel());
  constructor(private authService:AuthService){
    this.authService.getme()?.subscribe({
      next:response=>{
          this.profile.set(response)
          console.log(this.profile());
      },
      error: err=>{
        console.log(err);
      }
    })
  }
}
