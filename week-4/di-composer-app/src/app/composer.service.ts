/*

    Title: composer.service.ts
    Author: Phuong Tran
    Date: 14/04/2024
    Description: Inversion of control and dependency injection.

*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})

// class for creating a new composer object
export class ComposerService {
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


