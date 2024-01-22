import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counters: any[] = [];
  private countersSubject = new BehaviorSubject<number>(0);

  getCounters() {
    return this.counters;
  }

  getCountersSubject() {
    return this.countersSubject.asObservable();
  }

  addCounter() {
    this.counters.push({ count: 0 });
    this.updateCountersSubject();
  }

  resetCounters() {
    this.counters = [];
    this.updateCountersSubject();
  }

  incrementCounter(index: number) {
    this.counters[index].count++;
    this.updateCountersSubject();
  }

  decrementCounter(index: number) {
    if (this.counters[index].count > 0) {
      this.counters[index].count--;
      this.updateCountersSubject();
    }
  }

  deleteCounter(index: number) {
    this.counters.splice(index, 1);
    this.updateCountersSubject();
  }

  private updateCountersSubject() {
    // console.log("1", this.counters);
    this.countersSubject.next(this.counters.length);
    // console.log("2", this.counters);
  }
}
