import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
     <div>
        <h1>Parent Component</h1>
        <p>
           Data from the Parent component{{title}}
           <app-child [data]="users" (eventTriggered)="handleSubmitEventInParent()"></app-child>
           
        </p>
     </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {

  title = "Hello Angular!"
  users=['sdfdsf','sfddsf','sdfdsf']
  constructor() { 
    console.log(`Came inside the constructor of Parent Component`);
  }

  ngOnInit(): void {
    console.log(`Came inside the init method of the component`);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Came inside the destroy method of the component')
  }

  handleSubmitEventInParent(){
    console.log('Printing the statement in the parent component ....')
  }

  

  
}
