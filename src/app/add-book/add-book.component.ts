import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LibraryService } from '../services/library.service';
import { Item, Availability } from '../models/item';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common'; // ✅ Import added here!

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatSelectModule, 
    MatCardModule, 
    NgFor // ✅ Added NgFor here to avoid the error
  ],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookForm: FormGroup;
  availibilityOptions = [
    { value: Availability.AVAILABLE, label: "Available" },
    { value: Availability.UNAVAILABLE, label: "Unavailable" }
  ];

  constructor(private fb: FormBuilder, private libraryService: LibraryService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      author: ['', Validators.required],
      image: ['', Validators.required],
      availibility: [Availability.AVAILABLE, Validators.required]
    });
  }

  addBook() {
    if (this.bookForm.valid) {
      const newBook: Item = this.bookForm.value;
      this.libraryService.addBook(newBook).then(() => {
        alert('Book added successfully!');
        this.bookForm.reset();
      }).catch(err => {
        console.error('Error adding book:', err);
      });
    }
  }
}
