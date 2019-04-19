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
  constructor(private viewmodelDashboardService:ViewmodeldashboardService) {
     this.modelObj = this.viewmodelDashboardService.getModel();
    console.log(this.modelObj);
  }

  public themeColors() {
  }

  ngOnInit() {
  }

  downloadModel() {

    window.open('http://localhost:4000/uploadToMongo/zipfiles');

    // this.http.get('http://localhost:4000/uploadToMongo/zipfiles').subscribe(res => {
    //
    // });
  }
}
