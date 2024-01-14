import { Component , OnInit} from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appariel-dashboard',
  templateUrl: './appariel-dashboard.component.html',
  styleUrls: ['./appariel-dashboard.component.css']
})
export class ApparielDashboardComponent implements OnInit{
  isAuth:boolean = false

  apparielList:any [] | undefined

  // injection du service Appareil
  constructor(private apparielService : AppareilService)  {
    setTimeout(() => {
           this.isAuth = !this.isAuth;
    },4000 );
  }
  ngOnInit(): void{
    this.apparielList=this.apparielService.apparielList
  }
  onAlumer(){
    this.apparielService.siwtchOnAll()
  }
  onEtendre(){
    if(confirm('Voulez-vous étiendre touts les appariels')){
   this.apparielService.siwtchOfAll()
    }
}
}
