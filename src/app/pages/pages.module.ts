import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProfileModule } from './profile/profile.module';
import { PhotographyModule } from './photography/photography.module';
import { ProjectModule } from './project/project.module';
import { ResumeModule } from './resume/resume.module';
import { WritingModule } from './writing/writing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ProfileModule,
    PhotographyModule,
    ProjectModule,
    ResumeModule,
    WritingModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
