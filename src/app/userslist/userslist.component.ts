import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductesReqService } from '../service/productes-req.service';
import { product } from '../types/product';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent {
  
  cartserv=inject(CartService);
  addtocart(product:any){
    this.cartserv.addtocart(product)
  }
  productlist :product[]=[];
  constructor(private api:ProductesReqService){}
  ngOnInit(){
    this.api.getRecipesList().subscribe((data : any) => this.productlist =data.products)
  }
 
}