import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() btnTextLabel: string = " ";
  @Input() btnTextStrong: string = " ";

  @Input() disabledBtnText: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
  navigate(){
    this.onNavigate.emit();
  }
}
