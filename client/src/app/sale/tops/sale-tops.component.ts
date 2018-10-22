import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-sale-tops',
  templateUrl: './sale-tops.component.html'
})

export class SaleTopsComponent implements OnInit {

  products$: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products$ = data
    );
  }
}
