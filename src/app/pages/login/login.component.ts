import { Component } from '@angular/core';
import { DefaultLoginPageComponent } from '../../compoents/default-login-page/default-login-page.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginPageComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
