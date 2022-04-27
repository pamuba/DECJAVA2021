import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  public greeting = "";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any){
    // alert("Button Clicked")
    console.log(event)
    this.greeting = 'Welcome to the Site:'+event.type
  }

}
