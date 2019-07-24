import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then(mod => mod.FoodModule)
  },
  {
    path: 'clothing',
    loadChildren: () => import('./clothing/clothing.module').then(mod => mod.ClothingModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
