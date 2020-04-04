import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/tech-officer/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
];

@Component({
  selector: 'app-sidebar-techofficer',
  templateUrl: './sidebar-techofficer.component.html'
})
export class SidebarTechofficerComponent implements OnInit {

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

