import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { UserName,isLoggedIn } from './operators/auth.operator';
import { Navigation } from './components/navigation/navigation';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  UserName = UserName
  protected isLoggedIn = isLoggedIn
  protected readonly title = signal('SmartShopPortal');
}
