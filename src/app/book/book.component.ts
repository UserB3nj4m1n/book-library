import { Component, Input } from '@angular/core';
import { LibraryComponent } from "../library/library.component";
import { Item } from '../models/item';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [LibraryComponent, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() item!: Item;
}
