import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Product } from '../Product';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

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
    window.alert("Great choice, the dress item has been added to your cart!");
  }


}
