import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  standalone: false,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateFieldComponent),
    multi: true
  }]
})
export class DateFieldComponent implements ControlValueAccessor {
  @Input() label: string = '';

  value: string = new Date().toISOString();
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(val: any): void { this.value = val || new Date().toISOString(); }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  onDateChange(event: any): void {
    this.value = event.detail.value;
    this.onChange(this.value);
  }
}
