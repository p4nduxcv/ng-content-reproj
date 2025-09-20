import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppNumbersOnly]',
  standalone: true,
})
export class AppNumbersOnlyDirective {
  constructor() {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedbuttons = ['Tab', 'Backspace'];
    if (
      (event.key >= '0' && event.key <= '9') ||
      (event.key >= 'Numpad0' && event.key <= 'Numpad9') ||
      allowedbuttons.includes(event.key)
    ) {
      return;
    } else {
      event.preventDefault();
    }
  }
}
