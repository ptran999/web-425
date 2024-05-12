/*
    Title: wishlist.component.ts
    Author: Phuong Tran
    Date: 8/05/2024
    Description: Exercise 6.2 - Output Properties.
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

  ngOnInit(): void {
  }

}
