import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LibraryComponent } from './library/library.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
    {path: '', component: LibraryComponent},
    {path: 'cart', component: CartComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'add-book', component: AddBookComponent},
];