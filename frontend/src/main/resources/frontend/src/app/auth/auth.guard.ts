import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Role} from "./model/user/role"


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router)
  {}

  hasRole(rolesList:Role[] , currentUserRole :Role ){
    for (let index = 0; index < rolesList.length; index++) {
      const role = rolesList[index];
      if(role === currentUserRole){
        return true;
      }
    }
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const currentUser = this.authService.currentUserValue;
      
      if (currentUser) {
        // check if route is restricted by role
        let RoleList : Role[] = Object.values(next.data)
        console.log(next.data)
        console.log(this.hasRole(RoleList,currentUser.role))
        if (next.data && this.hasRole(RoleList,currentUser.role)) {
            // role authorised so return true
            console.log("authorized route so return true.")
            return true;
        }
      }
      console.log("cannot active route redirec to login page.")
      // unauthorized route access so return false and navigate to login
      this.router.navigate(['login']);
      return true;
  }

}
