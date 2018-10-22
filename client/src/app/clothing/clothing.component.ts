import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
})

export class ClothingComponent implements OnInit {
  products$: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products$ = data
    );
  }
}
