import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input-default',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => InputDefaultComponent),
      multi:true
    }
  ],
  templateUrl: './input-default.component.html',
  styleUrl: './input-default.component.scss'
})
export class InputDefaultComponent implements ControlValueAccessor{
  @Input() type: InputTypes = "email";
  @Input() placeholder: string = "";
  @Input() label: string = "";

  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }
  writeValue(value: any): void {
    this.value = value
  }
  registerOnChange(fn: any): void {
      this.onChange = fn
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {

  }
}
