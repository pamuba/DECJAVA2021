import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>The Test Componet</h2>
    <h2>{{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome: " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <!-- <h2>{{a=2+2}}</h2> -->
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "John"
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "From Function:" + this.name
  }

}
