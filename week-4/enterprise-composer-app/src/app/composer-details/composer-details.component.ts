/*  Title: composer-details.component.ts
    Author: Phuong Tran
    Date: 04/07/2024
    Description: Passing Data to Routes, Part 1.
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

// Access other data via the composer details
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    if(this.composerId) {
      this.composer = composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
