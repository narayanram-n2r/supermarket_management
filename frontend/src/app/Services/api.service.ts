import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../Components/Products/Product';
import { User } from '../Components/login/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3800/users/users");
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3800/products/products");
  }

  showCart(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3800/cart/cart");
  }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:4000/cart/addToCart", product);
  }

  removeFromCart(id): Observable<Product> {
    return this.http.delete<Product>("http://localhost:4000/cart/removeFromCart/" + id);
  }

  emptyCart(): Observable<Product> {
    return this.http.delete<Product>("http://localhost:4000/cart/removeAll");
  }
}

