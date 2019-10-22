import { Component, OnInit } from '@angular/core';
// import { ProductAlertComponent} from '../../components/product/product-alert/product-alert.component';
import { products} from '../../components/product/products';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  constructor() { }

  ngOnInit() {
  }

}
