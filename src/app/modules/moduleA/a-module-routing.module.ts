import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },

      {
        path: 'list',
        component: ListComponent
      },

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AModuleRoutingModule { }
