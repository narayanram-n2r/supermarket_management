// This seervice file is used for setting up HttpClient api calls

// Importing important modules and directives
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../Components/Products/Product'; // Product is a class declared which holds the model of a product.
import { User } from '../Components/login/User'; // User is a class declared which holds the model of a user.

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Creating an object of HttpClientModule
  constructor(private http: HttpClient) { }

  // Creating a getUsers method which will fetch data from backend for getting the users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3800/users/users");
  }

  // Creating a getProducts method which will fetch data from the backend for getting products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3800/products/products");
  }

  // Creating a showCart method which will fetch data from the backend for getting cart items
  showCart(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3800/cart/cart");
  }

  // Declaring an addToCart method which will send the data to be added in the cart collection of the supermarket DB via backend
  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:4000/cart/addToCart", product);
  }

  // Declaring an removeFromCart method which will send the data to be removed from the cart collection of the supermarket DB via backend
  removeFromCart(id): Observable<Product> {
    return this.http.delete<Product>("http://localhost:4000/cart/removeFromCart/" + id);
  }

  // Declaring an emptyCart method which will send the data to be removed from the cart collection of the supermarket DB via backend
  emptyCart(): Observable<Product> {
    return this.http.delete<Product>("http://localhost:4000/cart/removeAll");
  }
}

