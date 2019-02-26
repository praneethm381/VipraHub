import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) { }
  modelSearch;
  listOfModels;
  ngOnInit() {
  }
  getResults() {
    this.http.get('../../assets/modelData.json').
    subscribe(modelData => {
      this.listOfModels = modelData['models'];
      console.log(modelData['models']);
    }, error => {});
  }

}
