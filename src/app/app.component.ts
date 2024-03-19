import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  @ViewChild('asCard')
  public card!:ElementRef<HTMLDivElement>

  public heart:number = 0

  constructor(private rendered2:Renderer2){

  }


  NoDecision(){

     const value1 = Math.random() * (75 - 0) - 0;
     const value2 = Math.random() * (75 - 0) - 0;
     const noResp = this.card.nativeElement


     this.rendered2.removeClass(noResp,'card')
     this.rendered2.addClass(noResp,'card')
     this.rendered2.setStyle(noResp,'left',`${value1.toString()}%`)
     this.rendered2.setStyle(noResp,'top',`${value2.toString()}%`)

     this.heart += 1
    }
}
