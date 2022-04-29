import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <div *ngFor="let color of colors; index as i; first as f; last as l">
      <h2 [style.color]="color">{{i}}.{{color}}::{{f}}::{{l}}</h2>
      <hr>
    </div>
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | titlecase}}</h2>
    <h2>{{name | slice:3:5}}</h2>
    <h2>{{person | json}}</h2>

    <h2>{{55.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{.25 | percent}}</h2>
    <h2>{{.25 | currency }}</h2>
    <h2>{{5.678 | currency:'EUR'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    <h2>{{date | date:'dd/MMM/yyyy'}}</h2>
    <h2>{{date | date:'dd/MMMM/yyyy'}}</h2>
    
  `,
  styles: []
})
export class NgforComponent implements OnInit {

  public name = "John_Wick"
  public colors = ["red", "blue", "green"]
  public person = {
    "firtsName":"John",
    "lastName":"Wick"
  }
  public date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
