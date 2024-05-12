/*
    Title: app.module.ts
    Author: Phuong Tran
    Date: 03/31/2024
    Description: Data Binding.
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
