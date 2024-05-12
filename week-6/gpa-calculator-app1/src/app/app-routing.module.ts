/*
    Title: app-routing.module.ts
    Author: Phuong Tran
    Date: 04/28/2024
    Description: Assignment 6.4 - Input Properties.
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {path: 'not-found', component: NotFoundComponent},
    ]
  },
  {path: '**', redirectTo: 'session/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
