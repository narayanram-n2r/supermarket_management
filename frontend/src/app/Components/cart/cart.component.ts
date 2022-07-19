import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Product } from '../Products/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  public productsList = []; // Declaring an empty array to be used for storing products

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadAllProducts()
  }

  // This method calls the showCart method from the service
  loadAllProducts() {
    return this.api.showCart().subscribe(data => this.productsList = data);
  }

  // This method will call the removeFromCart from api service
  removeFromCart(id){
    return this.api.removeFromCart(id).subscribe(), window.location.reload();    
  }

  // This method will call the emptyCart from api service
  emptyCart(){
    return this.api.emptyCart().subscribe(), window.location.reload(); 
  }

}
