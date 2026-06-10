import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Products } from './components/products/products';
import { ProductsDetails } from './components/products-details/products-details';
import { Landingpage } from './components/landingpage/landingpage';
import { Profile } from './components/profile/profile';
import { authGuard } from './gaurds/auth.guard';
export const routes: Routes = [
    {path:'',component:Landingpage},
    {path:'login',component:Login},
    {path:'product',component:Products},
    {path:'product/:productId',component:ProductsDetails ,canActivate:[authGuard]},
     {path:'profile',component:Profile ,canActivate:[authGuard]}

];
