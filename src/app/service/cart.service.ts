import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private items:any[]=[];
  constructor() { }
  addtocart(product:any){
    this.items.push(product);
  }
   
  getitems(){
    return this.items
  }
  addToCart(product: any) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      this.items.push(product);
    }
    this.updateCart();
  }

  removeFromCart(product: any) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  updateCart() {
    // Handle any updates required after changing quantity or removing items
    localStorage.setItem('cart', JSON.stringify(this.items));
    console.log('Cart updated:', this.items);
  }

 
}
