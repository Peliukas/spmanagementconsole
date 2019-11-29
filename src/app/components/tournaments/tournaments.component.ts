import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../../services/api-manager.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  tournamentList: any[] = [];

  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.getTournaments();
  }

  getTournaments(){
    this.tournamentList = [];
    this.apiManager.getModelList('tournament')
      .subscribe( res => {
        let tournamentids = Object.keys(res);
        for(let id of tournamentids){
          this.tournamentList.push(res[id]); 
        }
      });
  }
  
  

}
