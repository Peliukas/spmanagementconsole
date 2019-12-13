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

  single: any[] = [];
  view: any[] = [250, 250];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#ff4d4f', '#4dff60', '#9b9b9b']
  };
  
  constructor(private apiManager: ApiManagerService, 
              private route: ActivatedRoute) {
                
                // Object.assign(this, { single });
               }

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
    this.single.push({"name": "Win", "value": this.fightStats.won});
    this.single.push({"name": "Lose", "value": this.fightStats.lost});
    this.single.push({"name": "Draw", "value": this.fightStats.draw});
  }


}
