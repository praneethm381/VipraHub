import { Component, OnInit } from '@angular/core';
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
  public modelID;
  backup;
  displayCategory = true;
  displayRating = true;
  categoryList = [];
  result = [];

  constructor(private http: HttpClient, private vipraService: ViprahubService, private router: Router, private orderPipe: OrderPipe) {
    // this.listOfModels = this.orderPipe.transform(this.vipraService.searchResults, this.order);
    console.log(this.listOfModels);
    this.vipraService.getMetadata().subscribe(res => {
      this.backup = res;
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
    this.backup = this.vipraService.searchResults;
    // this.router.navigate(['/search']);
  }
  showTiles() {
    this.table = false;
  }
  showGrids() {
    this.table = true;
  }
  viewModel(id) {
    localStorage.setItem('modelID', id);
    this.router.navigate(['./theme/colors'])
  }
  setOrder(value: string) {
    this.order = value;
  }
  categoryChecked(e) {
    const finalResult = [];
    if (e.target.checked) {
    this.categoryList.push(e.target.id);
    this.categoryList.forEach(item => {
      this.result = this.backup.filter(element => {
        return element.categoryID === item;
      });
      this.result.forEach(element => {
        finalResult.push(element);
      });
    });
    } else {
      const index: number = this.categoryList.indexOf(e.target.id);
      if (index !== -1) {
        this.categoryList.splice(index, 1);
      }
      this.categoryList.forEach(item => {
        this.result = this.backup.filter(element => {
          return element.categoryID === item;
        });
        this.result.forEach(element => {
          finalResult.push(element);
        });
      });
    }
    console.log(this.categoryList);
    console.log(this.result);
    console.log(finalResult);
    this.vipraService.searchResults = finalResult;
  }
  expandCategory() {
    this.displayCategory = true;
  }
  contractCategory() {
    this.displayCategory = false;
  }
  expandRating() {
    this.displayRating = true;
  }
  contractRating() {
    this.displayRating = false;
  }
}
