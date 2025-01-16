import { Component, Input } from '@angular/core';
import { Item, Availability } from '../models/item';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() item!: Item;

  toggleAvailability(): void {
    this.item.availibility = this.item.availibility === Availability.AVAILABLE 
      ? Availability.UNAVAILABLE 
      : Availability.AVAILABLE;
  }
}
