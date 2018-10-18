import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleComponent } from './sale.component';
import { SaleTopsComponent } from './tops/sale-tops.component';

const saleRoutes: Routes = [
  {
    path: 'sale',
    component: SaleComponent,
    children: [
      { path: 'tops', component: SaleTopsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(saleRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class SaleRoutingModule { }
