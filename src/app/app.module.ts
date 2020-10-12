import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
//import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { ListItemComponent } from './product/list-item/list-item.component';
import { DetailComponent } from './product/detail/detail.component';
//import { CartComponent } from './product/cart/cart.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    //SearchComponent,
    ProductComponent,
    ListItemComponent,
    DetailComponent,
   // CartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
