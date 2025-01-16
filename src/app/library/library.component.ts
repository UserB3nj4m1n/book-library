import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { LibraryService } from '../services/library.service';
import { Item } from '../models/item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BookComponent, NgFor],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  books: Item[] = [];
  errorMessage: string = '';

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getBooks().subscribe({
      next: (data: Item[]) => this.books = data,
      error: () => this.errorMessage = 'Failed to load books.'
    });
  }
}
