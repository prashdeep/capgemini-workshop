import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counter:number = 0;
  increment(){
    return ++this.counter;
  }
  decrement(){
    return -- this.counter;
  }
}
