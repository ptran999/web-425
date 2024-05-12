/*
    Title: book.interface.ts
    Author: Phuong Tran
    Date: 18/04/2024
    Description: Exercise 5.2 - Navigation and Layout.
*/

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string,
  numOfPages: number;
}
