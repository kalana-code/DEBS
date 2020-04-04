import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarTechofficerComponent } from './sidebar-techofficer.component';



@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ SidebarTechofficerComponent ],
  exports: [ SidebarTechofficerComponent ]
})

export class SidebarTechofficerModule { }
