import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from 'src/app/services/api-manager.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { VideoPlayerWindowComponent } from '../video-player-window/video-player-window.component';

@Component({
  selector: 'app-tournament-profile',
  templateUrl: './tournament-profile.component.html',
  styleUrls: ['./tournament-profile.component.css']
})
export class TournamentProfileComponent implements OnInit {

  tournamentId: any;
  tournamentData: any;
  tournamentProgram: any[] = [];
  countryList: any;
  
  constructor(private apiManager: ApiManagerService, 
              private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.getCoutryList();
    this.route.params.subscribe(params => {
      if(params['tournamentid']){
        this.tournamentId = params['tournamentid'];
        this.getTournament(); 
      }
   });
  }

  getTournament(){
    this.apiManager.searchForModel('tournament', 'id', this.tournamentId)
      .subscribe( res => {
        this.tournamentData = res[this.tournamentId];
        this.getTournamentProgram();
      });
    }
    
  getTournamentProgram(){
    this.apiManager.getTournamentProgram(this.tournamentId)
      .subscribe( res => {
        let programElementKeys = Object.keys(res);
        for(let programElementKey of programElementKeys){
          this.tournamentProgram.push(res[programElementKey]);
        }
      });
  }

  getCoutryList(){
    this.apiManager.getModelList('country')
      .subscribe( res => {
        this.countryList = this.apiManager.convertToArray(res);
      });
  }

  // displayVideoWindow(tournamentProgramElement: any){
  //   const dialogRef = this.dialog.open(VideoPlayerWindowComponent, {
  //     height: '90vh',
  //     width: '80vw',
  //     id: 'video-payer-window-content-container',
  //     data: tournamentProgramElement.videourl
  //   }); 
  // }

}
