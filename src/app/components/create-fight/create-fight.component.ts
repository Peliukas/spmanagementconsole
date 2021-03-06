import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiConfig } from 'src/app/api-config';
import { HttpClient } from '@angular/common/http';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-create-fight',
  templateUrl: './create-fight.component.html',
  styleUrls: ['./create-fight.component.css']
})
export class CreateFightComponent implements OnInit {

  displayContestantSelection: boolean;
  selectingRedContestant: boolean;
  redContestant: any;
  blueContestant: any;
  selectingBlueContestant: boolean;
  selectedClubId: number;
  fightclubMembers: any[];
  fightclubList: any[];

  constructor(public dialogRef: MatDialogRef<CreateFightComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiManager: ApiManagerService ) { }

  ngOnInit() {
   this.chooseContestant("red");
   this.getFightclubs();
  }

  getFightContestantCandidates(){
    this.apiManager.getClubMembers(this.selectedClubId)
      .subscribe(res => {
        this.fightclubMembers = []
        for(let index in res){
          if((!this.redContestant || res[index].id !== this.redContestant.id) && ( !this.blueContestant ||res[index].id !== this.blueContestant.id))
          this.fightclubMembers.push(res[index]);
        }
      });
  }

  chooseContestant(color: string){
    if(this.fightclubList && this.fightclubList.length > 0){
      this.selectedClubId = this.fightclubList[0].id;
    }
    this.displayContestantSelection = true;
    this.getFightclubs();
    if(color === 'red'){
      this.selectingRedContestant = !this.selectingRedContestant;
      this.selectingBlueContestant = false;
    }else{
      this.selectingBlueContestant = !this.selectingBlueContestant;
      this.selectingRedContestant = false;
    }
  }

  getFightclubs(){
    this.apiManager.getModelList("fightclub")
    .subscribe(res => {
      this.fightclubList = [];
      for(let index in res){
        this.fightclubList.push(res[index]);
      }
      if(this.fightclubList.length > 0 && !this.fightclubMembers){
        this.selectedClubId = this.fightclubList[0].id;
        this.getFightContestantCandidates();
      }else if(this.fightclubList.length > 0 && this.fightclubMembers.length > 0){
        this.getFightContestantCandidates();
      }
    });
  }

  clubFilterChanged(event: any){
    this.selectedClubId = event.value;
    this.getFightContestantCandidates();
  }

  setSelectedFighter(fighterId: number){
    for(let fightclubMember of this.fightclubMembers){
      if(this.selectingRedContestant && fightclubMember.id === fighterId){
        this.redContestant = fightclubMember;
        return;
      }else if(this.selectingBlueContestant && fightclubMember.id === fighterId){
        this.blueContestant = fightclubMember;
        return;
      }
    }
    
  }

  saveFight(){
    this.dialogRef.close({
      red: this.redContestant,
      blue: this.blueContestant
    });
  }

}
