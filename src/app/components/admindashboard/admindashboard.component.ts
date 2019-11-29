import {Component, OnInit, Input } from '@angular/core';
import { ApiManagerService } from '../../services/api-manager.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

 
  constructor(private apiManager: ApiManagerService) { }

  totals = {
    fightclubs: 0,
    fighters: 0,
    tournaments: 0,
  };

  ngOnInit() {
    this.apiManager.getModelList('tournament')
    .subscribe( result => {
      this.totals.tournaments = Object.keys(result).length;
    });
    this.apiManager.getModelList('fighter')
    .subscribe( result => {
      this.totals.fighters = Object.keys(result).length;
    });
    this.apiManager.getModelList('fightclub')
    .subscribe( result => {
      this.totals.fightclubs = Object.keys(result).length;
    });
  }

}
