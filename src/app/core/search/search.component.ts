// import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { SAMPLE_RESULTS } from '../search/sample-result';
//
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/map';
//
// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent {
//
//   searchControl: FormControl;
//
//   filteredResults$: Observable<string[]>;
//
//   results = SAMPLE_RESULTS;
//
//   constructor() {
//     this.searchControl = new FormControl('');
//     this.filteredResults$ = this.searchControl.valueChanges
//       .startWith('')
//       .map(val => this.filterResults(val))
//       .map(val => val.slice(0, 4));
//   }
//
//   private filterResults(val: string): string[] {
//     return val ? this.results.filter(v => v.toLowerCase().indexOf(val.toLowerCase()) === 0) : [];
//   }
// }
