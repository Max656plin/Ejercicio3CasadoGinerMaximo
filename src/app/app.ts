import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public title: string = 'Mi primera aplicación en Angular';
  public counter: number = 10;

  increment(): void {
    this.counter += 1;
  }

  decrement(): void {
    this.counter -= 1;
  }

  reset(): void {
    this.counter = 0;
  }
}
