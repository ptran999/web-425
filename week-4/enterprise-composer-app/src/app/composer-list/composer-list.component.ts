/*
   Title: composer-list.component.ts
    Author: Phuong Tran
    Date: 03/31/2024
    Description: Routing in Action.

*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  // an array of composer information
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers();
    this.txtSearchControl.valueChanges
    .pipe(debounceTime(500)).subscribe(val => this.filterComposers(val.toLowerCase()));
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    return this.composers = this.composerService.filterComposers(name.toLowerCase());
  }

}
