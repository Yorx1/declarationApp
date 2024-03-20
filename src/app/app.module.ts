import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DeclarationModule } from './declaration/declaration.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeclarationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
