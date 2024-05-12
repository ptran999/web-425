/*

    Title: composer-list.component.ts
    Author: Phuong Tran
    Date: 03/31/2024
    Description: Routing in Action.

*/

import { Component, OnInit } from '@angular/core';

// class for creating a new composer object
export default class Composer {
  fullName: string;
  genre: string;

  // for initialization
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  // an array of composer information
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Romantic"),
      new Composer("Wolfgang Mozart", "Classical"),
      new Composer("Johann Bach", "Baroque"),
      new Composer("Igor Stravinsky", "Ballet"),
      new Composer("Johann Strauss II", "Waltz")
    ];
  }

  ngOnInit(): void {
  }

}
