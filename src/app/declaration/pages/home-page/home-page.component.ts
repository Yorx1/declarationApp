import { Component } from '@angular/core';
import { DeclarationService } from '../../services/declaration.service';

@Component({
  selector: 'main-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private declarationService:DeclarationService)  {

  }


  get cant (){
    return this.declarationService.amount
  }







}
