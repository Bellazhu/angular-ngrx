import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store'

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count
  constructor() { }

  ngOnInit() {
  }

}