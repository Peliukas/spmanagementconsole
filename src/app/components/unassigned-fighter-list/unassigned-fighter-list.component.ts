import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';
@Component({
  selector: 'app-unassigned-fighter-list',
  templateUrl: './unassigned-fighter-list.component.html',
  styleUrls: ['./unassigned-fighter-list.component.css']
})
export class UnassignedFighterListComponent implements OnInit {

  unassignedFighters: any;
  selectingNewMembers: boolean = false;
  selectedUnassignedFighters = [];
  totalSelected: number = 0;
  clubId: number;

  constructor(
    public dialogRef: MatDialogRef<UnassignedFighterListComponent>,
    private http:HttpClient, private config: ApiConfig,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.clubId = this.data.clubId;
    this.getUnassignedFighters();
  }

  getUnassignedFighters(){
    this.unassignedFighters = [];
    this.http.get(this.config.apiUrl + 'fighters/unassigned')
    .subscribe(res => {
      let keys = Object.keys(res);
      for(let i = 0; i < keys.length; i++){
        this.unassignedFighters.push(res[keys[i]]);
      }
    });
  }

  fighterSelectionClicked(fighterId: number){
    
    if(this.selectedUnassignedFighters.includes(fighterId)){
      this.selectedUnassignedFighters.splice(this.selectedUnassignedFighters.indexOf(fighterId));
      this.totalSelected--;
    }else{
      this.selectedUnassignedFighters.push(fighterId);
      this.totalSelected++;
    }
  }

  saveSelected(){
    this.http.post(this.config.apiUrl + "assign/fighters/" + this.clubId, {fighterlist: this.selectedUnassignedFighters})
      .subscribe(res => {
        if(res){
          this.dialogRef.close(true);
        }else{
          this.dialogRef.close(false);
        }
      });
  }

}
