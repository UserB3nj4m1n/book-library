import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
    {path: 'cart', component: CartComponent},
    {path: 'library', component: LibraryComponent}
];