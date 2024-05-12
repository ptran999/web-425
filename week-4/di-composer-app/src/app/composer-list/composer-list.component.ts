/*
   Title: composer-list.component.ts
    Author: Phuong Tran
    Date: 03/31/2024
    Description: Routing in Action.

*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  // an array of composer information
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers();

  }

  ngOnInit(): void {
  }

}
