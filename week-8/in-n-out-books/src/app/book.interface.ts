/*
    Title: book.interface.ts
    Author: Phuong Tran
    Date: 8/05/2024
    Description: Exercise 5.3 - Data Tables.
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string,
  numOfPages: number;
}
