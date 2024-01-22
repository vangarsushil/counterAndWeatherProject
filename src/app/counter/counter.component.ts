import { Component, OnInit } from '@angular/core';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counters: any[] = [];

  constructor(private counterService: CounterService) {
    this.counters = this.counterService.getCounters();
  }

  ngOnInit(): void {

  }

  addCounter() {
    this.counterService.addCounter();
  }

  resetCounters() {
    this.counterService.resetCounters();
    this.counters = this.counterService.getCounters();
  }

  incrementCounter(index: number) {
    this.counterService.incrementCounter(index);
  }

  decrementCounter(index: number) {
    this.counterService.decrementCounter(index);
  }

  deleteCounter(index: number) {
    this.counterService.deleteCounter(index);
  }

}
