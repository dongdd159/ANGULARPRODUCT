import { Component, OnInit } from '@angular/core';
import {Iproduct} from "../iproduct";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Iproduct[] = [];

  name = new FormControl();
  price = new FormControl();
  description = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
  addProduct(value: Iproduct){
    if (value){
      const product: Iproduct = {
        id:0,
        name: value.name,
        price: value.price,
        description: value.description
      }
      this.products.push(product);
    }
  }

}
