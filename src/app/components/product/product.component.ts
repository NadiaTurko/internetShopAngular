import { Component, OnInit } from '@angular/core';
import { products } from '../product/products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  ngOnInit(): void {
  }
}
