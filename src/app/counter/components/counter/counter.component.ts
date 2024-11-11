

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
 <h3> Counter : {{counter}}</h3>
 <button (click)="increaseBy(5)">+5</button>
 <button (click)="counterReset()"> RESET</button>
 <button (click)="decreaseBy()">-1</button>
  `
})

export class CounterComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  increaseBy(value: number): void {
      this.counter +=value;
  }
  decreaseBy(): void {
    this.counter -=1;
}
  counterReset(): void{
    this.counter = 10;
  }


}
