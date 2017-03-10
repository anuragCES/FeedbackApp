// Angular
import { Component } from '@angular/core';


@Component({
  selector: 'fb-app',
  template:
  `<div>
    {{pageTitle}}
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Feedback App';
}