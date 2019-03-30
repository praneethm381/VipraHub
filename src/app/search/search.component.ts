import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ViprahubService} from '../viprahub.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listOfModels;
  search = { text: ''};
  constructor(private http: HttpClient, private vipraService: ViprahubService, private router: Router) {
  }
  ngOnInit() {
     this.listOfModels = this.vipraService.searchResults;
  }
}
