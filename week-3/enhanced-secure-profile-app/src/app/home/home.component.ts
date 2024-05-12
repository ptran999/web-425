/*

    Title: home.component.ts
    Author: Phuong Tran
    Date: 04/07/2024
    Description: Guarding Routes.

*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // removed default and added assignment variable
    assignment: string = 'Secure Profile App';
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
