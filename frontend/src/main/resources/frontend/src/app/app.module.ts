import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './layouts/sample/shared/navbar/navbar.module';
import { FooterModule } from './layouts/sample/shared/footer/footer.module';

//sideBar Module
import { SidebarModule } from './layouts/sample/sidebar/sidebar.module';
import {SidebarStudentModule} from './layouts/student-layout/sidebar-student/sidebar-student.module';
import {SidebarLecturerModule} from './layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.module';
import {SidebarTechofficerModule} from './layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.module'

import { AppComponent } from './app.component';

//layouts 
import { AdminLayoutComponent } from './layouts/sample/admin-layout.component';
import { LecturerLayoutComponent } from './layouts/lecturer-layout/lecturer-layout.component';
import { TechOfficerLayoutComponent } from './layouts/tech-officer-layout/tech-officer-layout.component';
import { HodLayoutComponent } from './layouts/hod-layout/hod-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';

import { MatSliderModule } from '@angular/material/slider';
import { Login } from './pages/login/login.component';
import { Page404 } from './pages/page404/page404.component';
import { SidebarHodComponent } from './layouts/hod-layout/sidebar-hod/sidebar-hod.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    BrowserModule /* or CommonModule */, 
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    
    NavbarModule,
    FooterModule,
    // Side bar 
    SidebarModule,
    SidebarLecturerModule,
    SidebarStudentModule,
    SidebarTechofficerModule,
    
    AppRoutingModule,
    MatSliderModule
  ],
  declarations: [
    AppComponent,
    Login,
    Page404,

    //layout -----
    AdminLayoutComponent,
    LecturerLayoutComponent,
    TechOfficerLayoutComponent,
    HodLayoutComponent,
    StudentLayoutComponent,
    SidebarHodComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
