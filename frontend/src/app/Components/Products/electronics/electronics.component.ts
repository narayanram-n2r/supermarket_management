import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { Product } from '../Product';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

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
    window.alert("Cool gadget, added to your cart!");
  }

}
