import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  counterService:CounterService;
  counter:number;
  constructor(counterService:CounterService) {
    this.counterService = counterService;
   }

  ngOnInit() {
  }

  increment(){
    console.log('Came inside the increment method');
    this.counter = this.counterService.increment();
  }

}
