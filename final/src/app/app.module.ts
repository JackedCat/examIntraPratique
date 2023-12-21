import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { DetaillesComponent } from './detailles/detailles.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitsComponent,
    DetaillesComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
