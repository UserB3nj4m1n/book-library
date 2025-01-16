import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(private store: AngularFirestore) {}

  getBooks() {
    return this.store.collection<Item>('books').valueChanges();
  }

  addBook(book: Item) {
    return this.store.collection('books').add(book);
  }
}
