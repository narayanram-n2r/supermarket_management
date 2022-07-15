import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Product } from '../Product';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

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
    window.alert("Nice Choice, the furniture has been added to your cart!");
  }
}
