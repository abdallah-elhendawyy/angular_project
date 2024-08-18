import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserslistComponent } from './userslist/userslist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', component: UserslistComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: '**', component:NotFoundComponent },
    ];
