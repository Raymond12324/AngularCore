import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [MatButtonModule,MatToolbarModule,MatIconModule,
    CommonModule
  ],
  exports: [MatButtonModule,MatToolbarModule,MatIconModule]
})
export class MaterialModule { }
