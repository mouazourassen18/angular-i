import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="text-italic">
      Heloo class="text-italic" from style
    </h1>
    <h2 [class]="teRed">
      this is a red color[class]=teRed as a reference from class
    </h2>
    <h2 [style.color]="'blue'">
      this is a red color[class]=teRed as a reference from class
    </h2>
  `,
  styles: [
    `
      h1 {
        color: green;
      }
      .text-red {
        color: red;
      }

      .text-yellow {
        color: yellow;
      }
      .text-italic {
        font-style: italic;
      }
    `
  ]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public tex = 'text-italic';
  teRed = 'text-red';
}
//  either  you can use the normal classes , you ablecan use a reference to   a variable// from the classes that you can use from  the   style  --> to the sheet .
// if you want to use multiple  classes at the ssame time
//  you can just use the ng-classes
// using [style.color]= "'orange'" ,, double quotes+ single quotes
