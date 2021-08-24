import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { FormsModule } from '@angular/forms';
import { EachProductComponent } from './products/each-product/each-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EachProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
