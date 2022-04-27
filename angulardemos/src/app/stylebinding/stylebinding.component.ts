import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  public hasError = true;
  public highlightColor = "pink";

  public titleStyle = {
    color:"blue",
    fontStyle:'italic'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
