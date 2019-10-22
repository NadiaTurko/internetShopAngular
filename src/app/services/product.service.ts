import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items = [];

  addToProduct(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearProduct() {
    this.items = [];
    return this.items;
  }
}

