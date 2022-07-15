import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Product } from '../Products/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  public productsList = [];
  public grandTotal: number;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadAllProducts()
    this.LoadTotal()
  }

  loadAllProducts() {
    return this.api.showCart().subscribe(data => this.productsList = data);
  }

  LoadTotal(){
    this.grandTotal = this.productsList.reduce((runningValue: number, product: Product)=> {
      runningValue = runningValue + (product.price);
    }, 0);
  }

  removeFromCart(id){
    return this.api.removeFromCart(id).subscribe(), window.location.reload();    
  }

  emptyCart(){
    return this.api.emptyCart().subscribe(), window.location.reload(); 
  }

}
