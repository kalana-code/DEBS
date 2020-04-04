import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// Guard
import {AuthGuard} from "app/auth/auth.guard"

import {Role} from './auth/model/user/role'

//Pages
import { Login } from './pages/login/login.component';
import { Page404 } from './pages/page404/page404.component';

//layouts
import { AdminLayoutComponent } from './layouts/sample/admin-layout.component';
import { LecturerLayoutComponent } from './layouts/lecturer-layout/lecturer-layout.component';
import { TechOfficerLayoutComponent } from './layouts/tech-officer-layout/tech-officer-layout.component';
import { HodLayoutComponent } from './layouts/hod-layout/hod-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';

const routes: Routes =[
  {
    path:"",
    redirectTo:"/login",
    pathMatch:'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    data:[Role.Admin],
    children: [
        {
          path: '',
          redirectTo:'dashboard',
          pathMatch:'full'
        },
        {
          path: '',
          loadChildren: './layouts/sample/admin-layout.module#AdminLayoutModule'
        }
    ]
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    canActivate:[AuthGuard],
    data:[Role.Student],
    children: [
        {
          path: '',
          redirectTo:'dashboard',
          pathMatch:'full'
        }
        ,
        {
          path: '',
          loadChildren: './layouts/student-layout/student-layout.module#StudentLayoutModule'
        }
    ]
  },
  {
    path: 'lecturer',
    component: LecturerLayoutComponent,
    canActivate:[AuthGuard],
    data:[Role.Lecturer],
    children: [
        {
          path: '',
          redirectTo:'dashboard',
          pathMatch:'full'
        }
        ,
        {
          path: '',
          loadChildren: './layouts/lecturer-layout/lecturer-layout.module#LecturerLayoutModule'
        }
    ]
  },
  {
    path: 'hod',
    component: HodLayoutComponent,
    canActivate:[AuthGuard],
    data:[Role.Hod],
    children: [
        {
          path: '',
          redirectTo:'dashboard',
          pathMatch:'full'
        }
        ,
        {
          path: '',
          loadChildren: './layouts/hod-layout/hod-layout.module#HodLayoutModule'
        }
    ]
  },
  {
    path: 'tech-officer',
    component: TechOfficerLayoutComponent,
    canActivate:[AuthGuard],
    data:[Role.TechOfficer],
    children: [
        {
          path: '',
          redirectTo:'dashboard',
          pathMatch:'full'
        }
        ,
        {
          path: '',
          loadChildren: './layouts/tech-officer-layout/tech-officer-layout.module#TechOfficerLayoutModule'
        }
    ]
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '**',
    component: Page404
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

export const RoutingComponent =[]
