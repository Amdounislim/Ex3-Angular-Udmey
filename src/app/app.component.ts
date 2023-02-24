import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tuna = false;
  item = 0;
  array: Array<number> = [];
  CreatePrag() {
    this.tuna = !this.tuna;
    this.item++;
    this.array.push(this.item);
  }
}
