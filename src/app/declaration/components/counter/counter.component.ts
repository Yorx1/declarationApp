import { Component, Input } from '@angular/core';
import { DeclarationService } from '../../services/declaration.service';

@Component({
  selector: 'app-counter',
  template: `
      <div id="textHeart">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
          <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
        </svg>
        <h1>x{{counter}}</h1>
      </div>
  `
  ,
  styleUrl: './counter.component.css'
})


export class CounterComponent {

  constructor(private declarationService:DeclarationService){

  }


  @Input()
  public counter:number = this.declarationService.amount







}
