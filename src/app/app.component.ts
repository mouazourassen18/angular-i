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
    <h1 *ngIf ="true">
    Hello  World !
    </h1> 

   
    <br>
    <div  *ngIf = " tOf ; then thnBlock ;  else elBlock "> </div>  

    

    <ng-template #elBlock >
    <input  type="text"  placeholder="second">
    
    </ng-template>
    <ng-template #thnBlock >
    <input  type="text"  placeholder ="hellooo">
    <br>
    <button> click </button>
    </ng-template>
   

    <div [ngSwitch]= color>
    <div *ngSwitchCase ="'red'"> this is just red , we are diplaying </div>
    <div *ngSwitchCase ="'green'"> <h3>this is just green, we are diplaying </h3></div>
    <div *ngSwitchCase ="'blue'"> this is just blue , we are diplaying </div>
    <div *ngSwitchDefault> <h2> Pick another color</h2> </div>
    </div>

    <div *ngFor =" let coco of colors ; index as i ; odd as l ; even as j">
    <h2>{{i}} :  {{coco}} : {{l}}  : {{j}}</h2>
    </div>
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
    `,
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public tex = 'text-italic';
  teRed = 'text-red';
  tOf = false;
  colors = ['red', 'green', 'yellow', 'brown', 'blue'];
  color = 'yellow';
}
//  either  you can use the normal classes , you ablecan use a reference to   a variable// from the classes that you can use from  the   style  --> to the sheet .
// if you want to use multiple  classes at the ssame time
//  you can just use the ng-classes
// using [style.color]= "'orange'" ,, double quotes+ single quotes
