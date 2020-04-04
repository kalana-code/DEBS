import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarStudentComponent } from './sidebar-student.component';



@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ SidebarStudentComponent ],
  exports: [ SidebarStudentComponent ]
})
export class SidebarStudentModule { }
