import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';

@Component({
  selector: 'app-page-configuration-screen',
  templateUrl: './page-configuration-screen.component.html',
  styleUrls: ['./page-configuration-screen.component.css']
})
export class PageConfigurationScreenComponent implements OnInit {

  featuredTournament: any;
  tournamentList: any = [];
  allPageConfigurations: any = [];
  enable_action_button_1: boolean = true;
  enable_action_button_2: boolean = true;
  banner_display_event_date: boolean = true;
  title_color: string = "#000";
  description_color: string = "#000";

  constructor(private http:HttpClient, 
              private config: ApiConfig) { }

  ngOnInit() {
    this.getTournamentList();
    this.getAllPageConfigurations();
  }

  setFeaturedTournament(tournamentid: number){
    this.featuredTournament = this.tournamentList.find( tournament => {
      return tournament.id === tournamentid;
    });
  }  

  getAllPageConfigurations(){
    this.http.get(this.config.apiUrl + 'pageconfiguration')
    .subscribe( res => {
      for(let configuration in res){
        this.allPageConfigurations[res[configuration].paramname] = res[configuration].paramvalue;
      }
      this.getFeaturedTournament();
      console.log(this.allPageConfigurations);
    });
  }

  getFeaturedTournament(){
    this.http.get(this.config.apiUrl + 'search/tournament/id/' +  this.allPageConfigurations['selected_featured_tournament_id'])
    .subscribe( res => {
      this.featuredTournament = res[this.allPageConfigurations['selected_featured_tournament_id']];
    });
  }

  getTournamentList(){
    this.http.get(this.config.apiUrl + 'tournament')
    .subscribe( res => {
      for(let tournament in res){
        this.tournamentList.push(res[tournament]);
      }
    });
  }

  saveFeaturedTournamentChanges(){
    let body = {
      page_name: "homepage",
      param_name: "selected_featured_tournament_id",
      param_value: this.featuredTournament.id,
    };
    this.http.post(this.config.apiUrl + 'pageconfiguration', body, this.config.httpOptions)
    .subscribe(res => {
      //add toast!
    });
  }
}
