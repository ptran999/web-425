/*
    Title: my-details.component.ts
    Author: Phuong Tran
    Date: 04/07/2024
    Description: Data Binding.
*/

import { Component, OnInit } from '@angular/core';

// class for creating the Person object
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2024", "#CodingWIthAngular", "#ngOmaha"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person

  //initialized using the Person class
  constructor() {
    this.myProfile = new Person("Phuong Tran", "Vietnamese Beef Noodle", "Purple");
  }

  ngOnInit(): void {
  }

}
