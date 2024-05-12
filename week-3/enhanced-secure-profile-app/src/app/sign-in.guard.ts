/*
    Title: sign-in.guard.ts
    Author: Phuong Tran
    Date: 04/07/2024
   Description: Guarding Routes.

*/


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = route.queryParams.isLoggedIn;

    if(isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
