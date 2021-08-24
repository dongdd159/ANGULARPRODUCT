import {Component, Input, OnInit} from '@angular/core';
import {Iproduct} from "../../iproduct";
import {FormControl} from "@angular/forms";
import {ProductComponent} from "../product.component";

@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
  styleUrls: ['./each-product.component.css']
})
export class EachProductComponent implements OnInit {
  @Input()
  eachproduct: Iproduct={};

  constructor() {
  }

  ngOnInit(): void {
  }


}
