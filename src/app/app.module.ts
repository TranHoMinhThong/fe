import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamModule } from 'ngx-webcam';
import { BillComponent } from './scan/bill/bill.component';
import {AgGridModule} from 'ag-grid-angular';
import { ScanComponent } from './scan/scan.component';
import { CameraComponent } from './scan/camera/camera.component';
import { DocumentComponent } from './document/document.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {HttpClientModule } from '@angular/common/http';
import { StaffComponent } from './about-us/staff/staff.component';
import { ContactComponent } from './about-us/contact/contact.component';
import { TechnologiesComponent } from './document/technologies/technologies.component';
import { ManualComponent } from './document/manual/manual.component';
import { APIComponent } from './document/api/api.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    ScanComponent,
    CameraComponent,
    DocumentComponent,
    AboutUsComponent,
    StaffComponent,
    ContactComponent,
    TechnologiesComponent,
    ManualComponent,
    APIComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
