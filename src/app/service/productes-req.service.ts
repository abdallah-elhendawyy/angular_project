import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductesReqService {

  constructor(private http :HttpClient) { }

  getRecipesList(){
    return this.http.get(`https://dummyjson.com/products` , {
      params : {
        sortBy : "name",
        order : 'desc'
      },
      headers: {
        Authorization: localStorage.getItem('access_token') || ''
      }
    })
  }

  getRecipeDetails(id: string){
    return this.http.get(`https://dummyjson.com/recipes/${id}`)
  }
}
