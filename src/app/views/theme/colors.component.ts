import { Component, Inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatTabsModule, MatSidenavModule} from '@angular/material';
import {ViewmodeldashboardService} from '../../viewmodeldashboard.service';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';


@NgModule({
  imports: [
    MatTabsModule,
  ]
})

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {
  modelObj;
  constructor(private viewModelDashboardService:ViewmodeldashboardService, private http: HttpClient) {
    console.log('Hi')
    this.viewModelDashboardService.getModel().subscribe(data=>{
       this.modelObj= data;
       console.log(this.modelObj);
     });
  }

  public themeColors() {
  }

  ngOnInit() {
  }

  downloadModel() {
    this.http.get('http://localhost:4000/uploadToMongo/chunks/5ca4cebaa4252c5d82870fad',).subscribe(res => {
      console.log();

    });
  }
}
