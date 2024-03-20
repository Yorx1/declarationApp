import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardOptionsComponent } from './components/card-options/card-options.component';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardOptionsComponent,
    CounterComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class DeclarationModule { }
