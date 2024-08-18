import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartserv=inject(CartService);

  
  increaseQuantity(product: any) {
    product.quantity++;
    this.cartserv.updateCart();
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      this.cartserv.updateCart();
    }
  }

  removeProduct(product: any) {
    this.cartserv.removeFromCart(product);
  }

  
}
