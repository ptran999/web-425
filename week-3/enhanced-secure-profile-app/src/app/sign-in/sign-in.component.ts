/*

    Title: sign-in.component.ts
    Author: Phuong Tran
    Date: 04/07/2024
    Description: Guarding Routes.

*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn: Boolean = false;

  constructor(private router: Router) {

  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'],
    {queryParams: {isLoggedIn: this.isLoggedIn},
    skipLocationChange: true})
  }

  ngOnInit(): void {
  }

}
