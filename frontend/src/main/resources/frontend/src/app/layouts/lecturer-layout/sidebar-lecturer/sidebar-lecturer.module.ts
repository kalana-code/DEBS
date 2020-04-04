import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarLecturerComponent } from './sidebar-lecturer.component';



@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ SidebarLecturerComponent ],
  exports: [ SidebarLecturerComponent ]
})

export class SidebarLecturerModule { }
