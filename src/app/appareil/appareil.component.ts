import { Component, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-my-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  @Input()
   name : string = ''
  @Input()
   status : string ='' // etient
  @Input()
  index!: number
  constructor( private appareilService : AppareilService){}

   getStatus(){
    return this.status;
   }
   onAllumer(){
     this.appareilService.switchOneOn(this.index)
   }
   onEteint(){
    this.appareilService.switchOneOf(this.index)
   }
   /*switch () {
    if (this.status === "Eteint") {
      this.appareilService.switchOneOn(this.index)
    } else {
       if (this.status === "Allumé") {
        this.appareilService.switchOneOf(this.index)
       }
    }
   }*/
}
