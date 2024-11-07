import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Item } from '../models/item';
import { NgFor } from '@angular/common';
import { ITEMS } from '../data/data';


@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BookComponent, NgFor],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  items: Item[] = ITEMS;
}

