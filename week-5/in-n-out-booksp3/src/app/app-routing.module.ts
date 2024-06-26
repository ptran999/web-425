/*
    Title: app-routing.module.ts
    Author: Phuong Tran
    Date: 04/18/2024
    Description: Exercise 5.3 - Data Tables.
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
