import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class DeclarationService {

  amount:number = 0

  noOptions(){
    this.amount += 1
  }

  yesOption(){
    this.amount -= 1
  }

}
