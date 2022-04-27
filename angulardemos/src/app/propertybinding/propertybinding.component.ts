import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
    <h2>Property Binding</h2>
    <input [id]="myId" type="text" value="John"/>
    <input id="{{myId}}" type="text" value="John"/>
    <input [disabled]="false" id="{{myId}}" type="text" value="John"/>
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="John"/>
  `,
  styles: []
})
export class PropertybindingComponent implements OnInit {

  constructor() { }
  public myId = "testId"
  public isDisabled = false;

  ngOnInit(): void {
  }

}
