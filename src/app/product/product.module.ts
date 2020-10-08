import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailComponent} from './detail/detail.component';
import {ListItemComponent} from './list-item/list-item.component';
//import {CartComponent} from './Cart/cart.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'list-item', component: ListItemComponent},
  {path: 'detail', component: DetailComponent},
 // {path: 'cart', component: CartComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductModule { }
