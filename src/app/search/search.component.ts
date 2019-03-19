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
  listOfModels;
  constructor(private http: HttpClient, private vipraService: ViprahubService) {
    this.listOfModels = this.vipraService.searchResults;
  }
  ngOnInit() {
  }
}
