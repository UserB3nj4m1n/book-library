import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Item } from '../models/item';
import { NgFor } from '@angular/common';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BookComponent, NgFor],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  books: Item[] = []; // Array to hold books fetched from the API
  errorMessage: string = ''; // To display error messages if the API call fails

  constructor(private libraryService: LibraryService) {}

  // ngOnInit(): void {
  //   // Fetch books when the component is initialized
  //   this.libraryService.getBooks().subscribe({
  //     next: (data: Item[]) => {
  //       this.books = data; // Populate books array with data from the API
  //     },
  //     error: (error) => {
  //       this.errorMessage = 'Failed to load books. Please try again later.';
  //       console.error('API Error:', error);
  //     },
  //   });
  // }
}
