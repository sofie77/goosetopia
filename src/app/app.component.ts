//import { Template } from '@angular/compiler/src/render3/r3_ast';
import {Component} from '@angular/core';

@Component({
selector: 'pm-root',
templateUrl: './app.component.html'
})
export class AppComponent{
  pageTitle: string = "goosetopia"
  title: string = "Angular: Getting Started"
}