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
        isbn: '9781501110368',
        title: 'It Ends with Us',
        authors: ['Colleen Hoover'],
        description: 'It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016.',
        numOfPages: 376
      },
      {
        isbn: '9781460396650',
        title: 'Not A Sound',
        authors: ['Heather Gudenkauf'],
        description: 'A shocking discovery and chilling secrets converge in this gripping novel.',
        numOfPages: 320
      },
      {
        isbn: '9780316769532',
        title: 'The Catcher in the Rye',
        authors: ['J. D. Salinger'],
        description: 'Teenage angst and rebellion!',
        numOfPages: 277
      },
      {
        isbn: '9783423283113',
        title: 'It Starts with Us',
        authors: ['Colleen Hoover'],
        description: 'It Starts with Us is a romance novel by Colleen Hoover,',
        numOfPages: 336
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
