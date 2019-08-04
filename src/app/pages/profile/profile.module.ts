import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { NbCardModule } from '@nebular/theme';
import { MyImageComponent } from './my-image/my-image.component';
import { MyIntroComponent } from './my-intro/my-intro.component';



@NgModule({
  declarations: [AboutMeComponent, MyImageComponent, MyIntroComponent],
  imports: [
    CommonModule,
    NbCardModule,
  ],
})
export class ProfileModule { }
