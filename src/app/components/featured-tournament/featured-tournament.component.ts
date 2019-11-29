import { Component, OnInit, Input } from '@angular/core';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-featured-tournament',
  templateUrl: './featured-tournament.component.html',
  styleUrls: ['./featured-tournament.component.css']
})
export class FeaturedTournamentComponent implements OnInit {

  @Input() featuredTournament: any;
  @Input() customConfig: any;
  allPageConfigurations: any;
  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.getAllPageConfigurations();
  }


  getAllPageConfigurations(){
    if(!this.customConfig){
      this.apiManager.getAllPageConfigurations("homepage")
      .subscribe( res => {
        this.allPageConfigurations = [];
        let keys = Object.keys(res);
        for(let key of keys){
          this.allPageConfigurations[key] = res[key].paramvalue;
        }
        if(!this.featuredTournament && Object.keys(res).length > 0){
          this.getFeaturedTournament();
        }
      });
    }else{
      this.allPageConfigurations = this.customConfig;
    }
  }

  getFeaturedTournament(){
    this.apiManager.searchForModel('tournament', 'id', this.allPageConfigurations.selected_featured_tournament_id)
      .subscribe( res => {
        this.featuredTournament = res[Object.keys(res)[0]];
      });
  }

}
