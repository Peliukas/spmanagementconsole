import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateFightComponent } from '../create-fight/create-fight.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';

@Component({
  selector: 'app-tournament-fight-manager',
  templateUrl: './tournament-fight-manager.component.html',
  styleUrls: ['./tournament-fight-manager.component.css']
})
export class TournamentFightManagerComponent implements OnInit {

  fightList: any = [];
  @Output() fightListChanged: EventEmitter<any> = new EventEmitter();
  @Input() tournamentId: number;
  constructor(private http:HttpClient, 
              private config: ApiConfig, 
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getFightList();
  }


  
  createFight(){
    const dialogRef = this.dialog.open(CreateFightComponent, {
      width: '60vw',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.fightList.push(result);
      }
      this.fightListChanged.emit(this.fightList);
    });
  }

  getFightList(){
    this.http.get(this.config.apiUrl + 'tournamentprogram/' + this.tournamentId)
      .subscribe(results => {
        for(let fight in results){
          this.fightList.push({
            id: results[fight].id,
            red: results[fight]['fight_contestants'][0]['fighter'],
            blue: results[fight]['fight_contestants'][1]['fighter'],
          });
        }
      });
  }

}
