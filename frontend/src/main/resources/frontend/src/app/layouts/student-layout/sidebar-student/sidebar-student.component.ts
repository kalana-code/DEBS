import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/student/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    // { path: '/student/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    // { path: '/student/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    // { path: '/student/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/student/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/student/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/student/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    // { path: '/admin/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar-student.component.html'
})
export class SidebarStudentComponent implements OnInit {

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
