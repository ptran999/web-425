/*
    Title: app.component.ts
    Author: Phuong Tran
    Date: 03/24/2024
    Description: Playing with components.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // removed default and added assignment variable
  assignment: string = 'Assignment 1.5 - Components';
}
