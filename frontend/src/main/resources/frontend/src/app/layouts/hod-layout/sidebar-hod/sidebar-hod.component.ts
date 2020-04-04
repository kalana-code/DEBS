import { Component, OnInit } from '@angular/core';

import {AuthService} from 'app/auth/auth.service'

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/hod/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    // { path: '/hod/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    // { path: '/hod/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    // { path: '/hod/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/hod/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/hod/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/hod/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    // { path: '/admin/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar-hod',
  templateUrl: './sidebar-hod.component.html'
})
export class SidebarHodComponent implements OnInit {

  menuItems: any[];

  constructor(private authService:AuthService) { }

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
  logOut(){
    this.authService.logout()
}
}
