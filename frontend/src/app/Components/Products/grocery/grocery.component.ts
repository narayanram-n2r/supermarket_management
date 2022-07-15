import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Product } from '../Product';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  public productsList = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getALlProducts()
  }

  getALlProducts() {
    return this.api.getProducts().subscribe(data => this.productsList = data);
  }

  addToCart(product: Product) {
    this.api.addToCart(product).subscribe((data: Product) => {
      data = product;
    })
    window.alert("Tasty food, added to your cart!");
  }

}
