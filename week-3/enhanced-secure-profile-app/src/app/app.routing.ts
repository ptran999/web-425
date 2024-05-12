/*
    Title: app-routing.module.ts
    Author: Phuong Tran
    Date: 03/31/2024
    Description: Data Binding.

*/

import { Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";
import { SignInGuard } from "./sign-in.guard";

export const AppRoutes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomeComponent, canActivate: [SignInGuard]},

];
