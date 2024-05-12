/*
    Title: base-layout.component.ts
    Author: Phuong Tran
    Date: 04/28/2024
    Description: Assignment 6.4 - Input Properties.
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  signOut() {
    this.cookieService.deleteAll();

    this.router.navigate(['/session/sign-in']);
  }

  ngOnInit(): void {
  }

}
