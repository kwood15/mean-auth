import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  products$: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products$ = data
    );
  }
}
