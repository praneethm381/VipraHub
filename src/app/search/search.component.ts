import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { OrderModule } from 'ngx-order-pipe';
import {ViprahubService} from '../viprahub.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient, private vipraService: ViprahubService) { }
  listOfModels;

  getResults() {
    // this.createCategory();
    // this.vipraService.searchMetadata()
    //   .subscribe(res => {
    //     console.log(res);
    //     this.listOfModels = res;
    //   }, err => {
    //     console.log(err);
    //   });
    // this.http.get('../../assets/modelData.json').
    // subscribe(modelData => {
    //   this.listOfModels = modelData['models'];
    //   console.log(modelData['models']);
    // }, error => {});
  }
  ngOnInit() {
    this.getResults();
  }

}
