import { Directive, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appPositiveNumber]',
  standalone: true,
  providers: [NgModel]
})
export class PositiveNumberDirective {
  constructor(private ngModel: NgModel) { }

  @HostListener('ngModelChange', ['$event'])
  onInput(value: number) {
    if (value < 1 || isNaN(value) || !Number.isInteger(value)) {
      this.ngModel.control.setValue(1);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const invalidKeys = ['-', 'Subtract', '.', ',', 'e'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
    if (event.key === 'ArrowDown') {
      const input = event.target as HTMLInputElement;
      const value = Number(input.value);
      if (value <= 1) {
        event.preventDefault();
      }
    }
  }
}
