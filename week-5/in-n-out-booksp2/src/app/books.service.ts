/*
    Title: books.service.ts
    Author: Phuong Tran
    Date: 04/16/2024
    Description: Exercise 5.3 - Data Tables.
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780345339683',
        title: 'The Hobbit',
        authors: ['J.R.R. Tolkien'],
        description: 'Bilbo Baggins sets out to get stuff done!',
        numOfPages: 287
      },
      {
        isbn: '9780593099322',
        title: 'Dune',
        authors: ['Frank Herbert'],
        description: 'A war for the spice begins!',
        numOfPages: 688
      },
      {
        isbn: '9780316769532',
        title: 'The Catcher in the Rye',
        authors: ['J. D. Salinger'],
        description: 'Teenage angst and rebellion!',
        numOfPages: 277
      },
      {
        isbn: '9780590405959',
        title: 'The Lion, the Witch and the Wardrobe',
        authors: ['C. S. Lewis'],
        description: 'Follow Peter, Susan, Edmund, and Lucy into the Wardrobe!',
        numOfPages: 186
      },
      {
        isbn: '9780261103573',
        title: 'The Fellowship of the Ring',
        authors: ['J.R.R. Tolkien'],
        description: 'Being the first part of The Lord of the Rings',
        numOfPages: 407
      },
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for(let book of this.books) {
      if(book.isbn === isbn) {
        return book;
      }
    }
    // return {} as IBook;
  }
}
