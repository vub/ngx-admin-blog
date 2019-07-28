import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    NbCardModule,
  ],
})
export class ProfileModule { }
