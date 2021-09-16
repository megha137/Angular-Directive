import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Directive';
  name="megha";
  num :number =0;

  Days:Array <String> =["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday" ];
  }
