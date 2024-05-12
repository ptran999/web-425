/*
    Title: app.component.ts
    Author: Phuong Tran
    Date: 8/05/2024
    Description: Assignment 8.2 - Server-side Communications.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
