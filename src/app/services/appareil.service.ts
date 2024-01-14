import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  apparielList= [
    {name:"Machine a laver" , staut: "Eteint"},
    {name:"Tv" , staut: "Allumé"},
    {name:"Climatiseuer" , staut: "Eteint"},
    {name:"Pc" , staut: "Allumé"},
    {name:"Micro  onde" , staut: "Eteint"},
    {name:"Four" , staut: "Allumé"},
    {name:"Aspirateur" , staut: "Eteint"},


  ]
  constructor() { }
  siwtchOnAll(){
    for (let  a of this.apparielList) {
     a.staut ='Allumé'
    }
  }
  siwtchOfAll(){
    for (let  a of this.apparielList) {
      a.staut ='Eteint'
      console.log(a.staut)
     }
  }
  switchOneOn(i: number){
     this.apparielList[i].staut ='Allumé'
  }
  switchOneOf(i: number){
    this.apparielList[i].staut ='Eteint'
 }
}
