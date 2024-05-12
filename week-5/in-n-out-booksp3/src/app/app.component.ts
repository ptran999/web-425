/*
    Title: app.component.ts
    Author: Phuong Tran
    Date: 16/04/2024
    Description: Exercise 5.3 - Data Tables.
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
    this.assignment = 'Assignment 5.4 - Dialogs';
  }
}
