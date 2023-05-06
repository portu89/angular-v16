import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;

  addCounter() {
    if (this.counter !== 5) {
      this.counter = this.counter + 1;
    }
  }

  removeCounter() {
    if (this.counter !== 0) {
      this.counter = this.counter - 1;
    }
  }
}
