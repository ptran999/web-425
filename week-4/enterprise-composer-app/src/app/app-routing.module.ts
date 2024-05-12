/*

    Title: app-routing.module.ts
    Author: Phuong Tran
    Date: 03/31/2024
    Description: Routing in Action.

*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// routing for the separate pages
const routes: Routes = [
  {path: 'composer-list', component: ComposerListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'composer-details/:composerId', component: ComposerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
