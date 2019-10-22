import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isTokenPresent: any;


  ngOnInit(): void {
    this.isTokenPresent = localStorage.getItem('token');
  }
}
