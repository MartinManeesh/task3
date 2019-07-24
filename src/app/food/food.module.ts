import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VegComponent } from './veg/veg.component';
import { NonVegComponent } from './non-veg/non-veg.component';

@NgModule({
  declarations: [DashboardComponent, VegComponent, NonVegComponent],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
