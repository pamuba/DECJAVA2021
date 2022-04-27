import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  template: `
        <!--<h2 *ngIf="displayName; else elseBlock">Hello World</h2>

        <ng-template #elseBlock>
          <h2>
              Content from elseBlock
          </h2>
        </ng-template>-->
       
         <h2 *ngIf="displayName; then thenBlock; else elseBlock"></h2>

        <ng-template #thenBlock>
          <h2>Then Block</h2>
        </ng-template>
        <ng-template #elseBlock>
          <h2>Else Block</h2>
        </ng-template>
  `,
  styles: []
})
export class StructuraldirectivesComponent implements OnInit {

  constructor() { }
  displayName = false

  ngOnInit(): void {
  }

}
