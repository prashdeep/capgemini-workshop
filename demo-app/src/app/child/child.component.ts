import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <div>
      <h1>Child Component</h1>
      <p>{{prop}} is passed from the Parent in the child</p>
      <button class="btn btn-primary" (click)="handleClick()">HandleSubmit</button
      <div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input('data') prop;

  @Output ('eventTriggered') eventEmitter = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.eventEmitter.emit();
  }

   
}
