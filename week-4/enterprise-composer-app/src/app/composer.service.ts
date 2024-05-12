/*
    Title: composer.service.ts
    Author: Phuong Tran
    Date: 04/14/2024
    Description: Assignment 4.4 - Async Pipe.
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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
      {composerId: 102, fullName: "Johann Bach", genre: "Baroque"},
      {composerId: 103, fullName: "Wolfgang Mozart", genre: "Classical"},
      {composerId: 104, fullName: "Igor Stravinsky", genre: "Ballet"},
      {composerId: 105, fullName: "Johann Strauss II", genre: "Waltz"},
    ]

  }

  getComposers(): Observable<IComposer[]>;

  getComposers() {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if(composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(
      composers => composers.filter(
      composer => composer.fullName.toLowerCase().indexOf(name)>-1)))
  }

}


