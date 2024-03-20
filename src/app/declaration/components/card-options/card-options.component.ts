import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { DeclarationService } from '../../services/declaration.service';

@Component({
  selector: 'card-options',
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.css'
})
export class CardOptionsComponent {

  @ViewChild('asCard')
  public card!:ElementRef<HTMLDivElement>



  constructor(private rendered2:Renderer2,
    private declarationService:DeclarationService){

  }




  NoDecision(){

    const value1 = Math.random() * (75 - 0) - 0;
    const value2 = Math.random() * (75 - 0) - 0;
    const noResp = this.card.nativeElement


    this.rendered2.removeClass(noResp,'card')
    this.rendered2.addClass(noResp,'card')
    this.rendered2.setStyle(noResp,'left',`${value1.toString()}%`)
    this.rendered2.setStyle(noResp,'top',`${value2.toString()}%`)

    this.declarationService.noOptions()

   }

   yesDecision(){

   }

}
