import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import { UnassignedFighterListComponent } from '../unassigned-fighter-list/unassigned-fighter-list.component';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-club-members',
  templateUrl: './club-members.component.html',
  styleUrls: ['./club-members.component.css']
})
export class ClubMembersComponent implements OnInit {

  @Input() clubId: number;
  memberList: any;

  constructor(public dialog: MatDialog, 
              public snackBar: MatSnackBar,
              private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.getClubMembers();
  }

  getClubMembers(){
    this.apiManager.getClubMembers(this.clubId)
    .subscribe(res => {
      let keys = Object.keys(res);
      if(keys.length > 0){
        this.memberList = [];
        for(let i = 0; i < keys.length; i++){
          this.memberList.push(res[keys[i]]);
        }
      }
    });
  }

  
  addNewMembers(){
    const dialogRef = this.dialog.open(UnassignedFighterListComponent, {
      data: {
        clubId: this.clubId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.snackBar.open("New members have been successfully added", "OK", {
          duration: 2000
        });
        this.getClubMembers();
      }else{
        
      }
    });
  }

  memberListChanged(event: any){
    this.memberList = [];
    for(let filteredMember in event){
      this.memberList.push(event[filteredMember]);
    }
  }

}
