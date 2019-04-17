import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ViprahubService} from '../../viprahub.service';
import {Router} from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {
  listOfModels;
  search = { text: ''};
  order = 'AccuracyValue';
  listOfCategories;
  table = false;

  constructor(private http: HttpClient, private vipraService: ViprahubService, private router: Router, private orderPipe: OrderPipe) {
    // this.listOfModels = this.orderPipe.transform(this.vipraService.searchResults, this.order);
    console.log(this.listOfModels);
    this.vipraService.getMetadata().subscribe(res => {
      console.log(res);
      this.vipraService.searchResults = res;
    }, err => {
      console.log(err);
    });

    this.vipraService.getCategory().subscribe(res => {
      console.log(res);
      this.listOfCategories = res;
    }, err => {
      console.log(err);
    });

  }
  getResults() {
    this.vipraService.searchText = this.search.text;
    this.vipraService.getSearchResults(this.search.text);
    this.router.navigate(['/search']);
  }
  showTiles() {
    this.table = false;
  }

  showGrids() {
    this.table = true;
  }
  // setOrder(value: string) {
  //   this.order = value;
  // }
}
