import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from 'src/app/services/api-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fighter-profile',
  templateUrl: './fighter-profile.component.html',
  styleUrls: ['./fighter-profile.component.css']
})
export class FighterProfileComponent implements OnInit {

  fighterId: number;
  fighterData: any;
  fightclubData: any;
  fightStats: any = {
    won: 0,
    lost: 0,
    draw: 0
  };
  constructor(private apiManager: ApiManagerService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fighterId = params['fighterid']; 
      this.getFighterProfileData();
   });
  }

  getFighterProfileData(){
    this.apiManager.getFighterProfileData(this.fighterId)
      .subscribe(result => {
        this.fighterData = result;
        console.log(result);
        this.getFightStats();
      });
  }

  getFightStats(){
    for(let fight of this.fighterData.relatedfights){
      if(fight.winnerfighterid && fight.winnerfighterid == this.fighterId){
        this.fightStats.won += 1;
      }else if(fight.winnerfighterid && fight.winnerfighterid != this.fighterId){
        this.fightStats.lost += 1;
      }else if(!fight.winnerfighterid){
        this.fightStats.draw += 1;
      }
    }
  }


}
