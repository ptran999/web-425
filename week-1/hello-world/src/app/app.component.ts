/**
 * Title: app.components.ts
 * Author: Phuong Tran
 * Date: 3/24/2024
 * Description: App typescript file
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Tran's world!";
}
