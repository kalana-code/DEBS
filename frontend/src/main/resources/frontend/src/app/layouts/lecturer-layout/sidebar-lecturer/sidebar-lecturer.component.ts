import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/lecturer/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    // { path: '/admin/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar-lecturer',
  templateUrl: './sidebar-lecturer.component.html'
})
export class SidebarLecturerComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    console.log("student-side")
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems)
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
