import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoutingModule } from '../routing.module';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [SharedModule,
    CommonModule, RoutingModule
  ],
  exports: [CoreRoutingModule]
})
export class CoreModule { }
