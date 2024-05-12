/*

    Title: composer.class.ts
    Author: Phuong Tran
    Date: 04/07/2024
    Description: Passing Data to Routes.

*/

import { IComposer } from "./composer.interface";

// class for creating a new composer object
export class Composer {
  composers: Array<IComposer>;

  // for initialization
  constructor() {
    this.composers = [
      {composerId: 101, fullName: "Ludwig van Beethoven", genre: "Romantic"},
      {composerId: 102, fullName: "Wolfgang Mozart", genre: "Classical"},
      {composerId: 103, fullName: "Johann Bach", genre: "Baroque"},
      {composerId: 104, fullName: "Igor Stravinsky", genre: "Ballet"},
      {composerId: 105, fullName: "Johann Strauss II", genre: "Waltz"},
    ]

  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if(composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
