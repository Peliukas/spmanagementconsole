import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';
import { MatSnackBar } from '@angular/material';

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
  action_button_1_label: string;
  action_button_1_url: string;
  enable_action_button_2: boolean = true;
  action_button_2_label: string;
  action_button_2_url: string;
  banner_display_event_date: boolean = true;
  banner_title_color: string;
  banner_description_color: string;

  constructor(private http:HttpClient, 
              private config: ApiConfig,
              private snackbar: MatSnackBar) { }

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
    this.http.get(this.config.apiUrl + 'pageconfig/homepage')
    .subscribe( res => {
      for(let configuration in res){
        this.allPageConfigurations[res[configuration].paramname] = res[configuration].paramvalue;
      }
      console.log(this.allPageConfigurations);
      this.getFeaturedTournament();
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

  saveFeaturedTournamentConfiguration(){
    // let body = {
    //     selected_featured_tournament_id: this.featuredTournament ? this.featuredTournament.id : -1,
    //     enable_action_button_1: this.enable_action_button_1 ? true : false,
    //     action_button_1_label: this.action_button_1_label ? this.action_button_1_label : "",
    //     action_button_1_url: this.action_button_1_url ? this.action_button_1_url : "",
    //     enable_action_button_2: this.enable_action_button_2 ? true : false,
    //     action_button_2_label: this.action_button_2_label ? this.action_button_2_label : "",
    //     action_button_2_url: this.action_button_2_url ? this.action_button_2_url : "",
    //     title_color: this.banner_title_color ? this.banner_title_color : "#000",
    //     description_color: this.banner_description_color ? this.banner_description_color : "#000",
    // };
    let body = {};
    for(let config in this.allPageConfigurations){
       console.log(config);
    }
    // this.http.post(this.config.apiUrl + 'pageconfig/homepage', this.allPageConfigurations, this.config.httpOptions)
    //   .subscribe(res => {
    //     if(res){
    //       this.snackbar.open("Changes have been successfully saved.", "OK", {
    //         duration: 3000
    //       });
    //     }
    //   });

  }
}
