import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
      <h2>Course Name: {{course.name | uppercase}}</h2>
      <h2>Course Rating:{{course.rating | number:'1.1-1'}}</h2>
      <h2>Price: {{course.price | currency:'INR':true }}</h2>
      <h2>Launch Date: {{course.launchDate | date:'shortDate'}}</h2>

  `,
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  course={
    name:'Angular 7',
    rating: 4.5666,
    price: 10000,
    launchDate:Date.now()
  }

}
