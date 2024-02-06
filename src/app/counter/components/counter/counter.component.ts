
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Contador en componente : {{counter}}</h1>

    <button (click)="increment()">+</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement()">-</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 0;

  increment(): void {
    this.counter ++;
  }
  decrement(): void {
    this.counter --;
  }
  reset(): void {
    this.counter = 0;
  }

}
