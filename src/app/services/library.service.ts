import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private url = 'https://run.mocky.io/v3/3f77bf99-1689-4a74-9ba0-6f0f3ad09011';
  bookList = [
    {
      "title": "The Great Gatsby",
      "desc": "A novel by F. Scott Fitzgerald set in the Jazz Age, exploring themes of wealth and social change.",
      "price": 15.99,
      "author": "F. Scott Fitzgerald",
      "image": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "1984",
      "desc": "Dystopian novel by George Orwell about a totalitarian regime and surveillance state.",
      "price": 12.99,
      "author": "George Orwell",
      "image": "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF894,1000_QL80_.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "To Kill a Mockingbird",
      "desc": "Harper Lee’s classic novel about racial injustice in the American South.",
      "price": 10.99,
      "author": "Harper Lee",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "Pride and Prejudice",
      "desc": "A romantic novel by Jane Austen that critiques the British landed gentry at the end of the 18th century.",
      "price": 8.99,
      "author": "Jane Austen",
      "image": "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "The Catcher in the Rye",
      "desc": "J.D. Salinger’s novel about teenage rebellion and alienation.",
      "price": 9.99,
      "author": "J.D. Salinger",
      "image": "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
      "availability": "UNAVAILABLE"
    },
    {
      "title": "Moby-Dick",
      "desc": "Herman Melville’s epic tale of obsession and revenge against a white whale.",
      "price": 14.99,
      "author": "Herman Melville",
      "image": "https://m.media-amazon.com/images/I/712mdW4zCcL._AC_UF1000,1000_QL80_.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "War and Peace",
      "desc": "Leo Tolstoy’s monumental novel that examines Russian society during the Napoleonic Wars.",
      "price": 18.99,
      "author": "Leo Tolstoy",
      "image": "https://m.media-amazon.com/images/I/71wXZB-VtBL.jpg",
      "availability": "UNAVAILABLE"
    },
    {
      "title": "Brave New World",
      "desc": "Aldous Huxley’s dystopian vision of a future society driven by technology and control.",
      "price": 11.99,
      "author": "Aldous Huxley",
      "image": "https://mrtns.sk/tovar/_l/2446/l2446169.jpg?v=17109181432",
      "availability": "AVAILABLE"
    },
    {
      "title": "The Hobbit",
      "desc": "J.R.R. Tolkien’s fantasy novel about the adventures of Bilbo Baggins in Middle-Earth.",
      "price": 10.99,
      "author": "J.R.R. Tolkien",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Hobbit_trilogy_dvd_cover.jpg/220px-The_Hobbit_trilogy_dvd_cover.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "Frankenstein",
      "desc": "Mary Shelley’s gothic novel about the consequences of scientific hubris.",
      "price": 7.99,
      "author": "Mary Shelley",
      "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631088473i/35031085.jpg",
      "availability": "UNAVAILABLE"
    },
    {
      "title": "The Odyssey",
      "desc": "Homer’s epic poem recounting the adventures of Odysseus on his journey home from the Trojan War.",
      "price": 13.99,
      "author": "Homer",
      "image": "https://m.media-amazon.com/images/I/A1JR2oK-orL._AC_UF1000,1000_QL80_.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "Crime and Punishment",
      "desc": "Fyodor Dostoevsky’s novel about the moral dilemmas of a poor ex-student in St. Petersburg.",
      "price": 12.49,
      "author": "Fyodor Dostoevsky",
      "image": "https://mrtns.eu/gorila/products/_l/106/l106233.jpg?v=17298290312",
      "availability": "AVAILABLE"
    },
    {
      "title": "Jane Eyre",
      "desc": "Charlotte Brontë’s novel about a young woman’s life experiences and her strong sense of morality.",
      "price": 9.99,
      "author": "Charlotte Brontë",
      "image": "https://m.media-amazon.com/images/I/61N-UOA0alL._UF894,1000_QL80_.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "Wuthering Heights",
      "desc": "Emily Brontë’s tale of love and revenge on the Yorkshire moors.",
      "price": 8.49,
      "author": "Emily Brontë",
      "image": "https://rukminim2.flixcart.com/image/850/1000/jyoq93k0/book/6/6/2/wuthering-heights-original-imafgutz8ehyrwhz.jpeg?q=90&crop=false",
      "availability": "UNAVAILABLE"
    },
    {
      "title": "The Divine Comedy",
      "desc": "Dante Alighieri’s epic poem describing the poet’s journey through Hell, Purgatory, and Paradise.",
      "price": 17.99,
      "author": "Dante Alighieri",
      "image": "https://notebookm.com/wp-content/uploads/2024/06/divine-comedy-cover.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "Les Misérables",
      "desc": "Victor Hugo’s novel about injustice, redemption, and revolution in 19th-century France.",
      "price": 16.99,
      "author": "Victor Hugo",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXVJQvWp5aS6QHExGXx0YLjjyOCbjmIUY6g&s",
      "availability": "UNAVAILABLE"
    },
    {
      "title": "Don Quixote",
      "desc": "Miguel de Cervantes’ classic novel about a man who believes he is a knight-errant and his comical adventures.",
      "price": 14.49,
      "author": "Miguel de Cervantes",
      "image": "https://m.media-amazon.com/images/I/71mbJoazlCL._AC_UF1000,1000_QL80_.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "The Brothers Karamazov",
      "desc": "Fyodor Dostoevsky’s philosophical novel about morality, faith, and the human condition.",
      "price": 13.49,
      "author": "Fyodor Dostoevsky",
      "image": "https://m.media-amazon.com/images/I/71OZJsgZzQL._AC_UF1000,1000_QL80_.jpg",
      "availability": "AVAILABLE"
    },
    {
      "title": "Anna Karenina",
      "desc": "Leo Tolstoy’s novel about the tragic love affair between Anna and the dashing Count Vronsky.",
      "price": 15.49,
      "author": "Leo Tolstoy",
      "image": "https://www.metalopolis.net/files/pictures/articlescovers/cover_karenina_012.jpg",
      "availability": "UNAVAILABLE"
    },
    {
      "title": "The Iliad",
      "desc": "Homer’s epic about the Trojan War, focusing on the hero Achilles and the fall of Troy.",
      "price": 12.99,
      "author": "Homer",
      "image": "https://m.media-amazon.com/images/I/71FVVdj9w4L._AC_UF1000,1000_QL80_.jpg",
      "availability": "AVAILABLE"
    }
  ]
  constructor(private http: HttpClient, private store: AngularFirestore) {}
  addData() {
    this.store.collection('books').add(this.bookList);
    // this.store.collection('books').add(data);
  }
  // getBooks(): Observable<Item[]> {
  //   return this.http.get<Item[]>(this.url);
  // }
}