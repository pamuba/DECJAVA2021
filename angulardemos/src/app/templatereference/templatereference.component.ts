import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  template: `
    <input #myInput type="text">
    <hr>
    <button (click)="logMessage(myInput.value)">CLICK</button>
    <hr>
    <h2>Two way data binding</h2>
    <input type="text" [(ngModel)]="name" />
    {{name}}
  `,
  styles: []
})
export class TemplatereferenceComponent implements OnInit {

  public name="Adam";
  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value:any){
    alert(value)
  }

}
