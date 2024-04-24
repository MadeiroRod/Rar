import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-page',
  standalone: true,
  imports: [],
  templateUrl: './default-login-page.component.html',
  styleUrl: './default-login-page.component.scss'
})
export class DefaultLoginPageComponent {
  @Input() title: string = " ";
  @Input() subTitle: string = " ";
  @Input() btnText: string = " ";

}
