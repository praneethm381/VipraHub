import { Component, Inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatTabsModule, MatSidenavModule} from '@angular/material';
import {ViewmodeldashboardService} from '../../viewmodeldashboard.service';

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
}
