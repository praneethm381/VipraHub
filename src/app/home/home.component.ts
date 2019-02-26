import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
  }
  listOfModels;
  readJSON() {
    this.http.get('../../assets/modelData.json').
    subscribe(modelData => {
    this.listOfModels = modelData['models'];
    console.log(modelData['models']);
    }, error => {});
  }
  goToSearch() {
    this.router.navigateByUrl('/search');
  }
  ngOnInit() {
    this.readJSON();
  }

}
