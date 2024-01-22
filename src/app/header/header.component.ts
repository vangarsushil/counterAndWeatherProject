import { Component, OnInit } from '@angular/core';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countersLength: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCountersSubject().subscribe(length => {
      this.countersLength = length;
    });
  }

}
