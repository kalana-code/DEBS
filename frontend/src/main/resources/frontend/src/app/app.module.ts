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

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

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
import { SettingComponent } from './components/sample/setting/setting.component';
import { CardComponent } from './components/sample/setting/card/card.component';

// material components 
//Angular Material Components
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    BrowserModule /* or CommonModule */, 
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    NavbarModule,
    FooterModule,
    // Side bar 
    SidebarModule,
    SidebarLecturerModule,
    SidebarStudentModule,
    SidebarTechofficerModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
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
    SidebarHodComponent,
    SettingComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
