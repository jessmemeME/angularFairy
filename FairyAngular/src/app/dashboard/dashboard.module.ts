import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    NgxChartsModule,
    DashboardRoutingModule,
    CommonModule
  ], providers:[
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class DashboardModule { }
