import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './pages/container/container.component';
import { ListComponent } from './components/list/list.component';
import { AModuleRoutingModule } from './a-module-routing.module';



@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AModuleRoutingModule
  ],
  exports: [AModuleRoutingModule]
})
export class AModuleModule { }
