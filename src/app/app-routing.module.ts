import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanComponent } from './scan/scan.component';
import { DocumentComponent } from './document/document.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffComponent } from './about-us/staff/staff.component';
import { ContactComponent } from './about-us/contact/contact.component';
import { TechnologiesComponent } from './document/technologies/technologies.component';
import { ManualComponent } from './document/manual/manual.component';
import { APIComponent } from './document/api/api.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'scan', component: ScanComponent
  },
  {
    path: 'document', component: DocumentComponent,
    children: [
      {
        path: '', component: ManualComponent
      },
      {
        path: 'technologies', component: TechnologiesComponent
      },
      {
        path: 'manual', component: ManualComponent
      },
      {
        path: 'api', component: APIComponent
      }

    ]
  },
  {
    path: 'about_us', component: AboutUsComponent,
    children: [
      {
        path: '', component: StaffComponent
      },
      {
        path: 'staff', component: StaffComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
