import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  counterService:CounterService;
  counter:number;
  constructor(counterService:CounterService) { 
    this.counterService = counterService;
  }

  ngOnInit() {
  }

  decrement(){
    console.log('came inside the counter method in two component');
    this.counter = this.counterService.decrement();
  }

}
