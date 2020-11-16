import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { combineAll } from 'rxjs-compat/operator/combineAll';
//import {CartComponent} from './product/Cart/cart.component';
import { SearchComponent } from './search/search.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{path: 'cart', component: CartComponent},
    {
      path: 'search/:name',
      component: SearchComponent,
    },
      { path: 'product',
     loadChildren:() =>
        import('./product/product.module').then((m)=> m.ProductModule) 
      },
      {
        path: 'customer',
        loadChildren: () =>
        import('./customer/customer.module').then((m) => m.CustomerModule),
      },
     {path: '**', component: NotFoundComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
