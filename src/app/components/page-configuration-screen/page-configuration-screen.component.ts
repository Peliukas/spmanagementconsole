import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-page-configuration-screen',
  templateUrl: './page-configuration-screen.component.html',
  styleUrls: ['./page-configuration-screen.component.css']
})
export class PageConfigurationScreenComponent implements OnInit {

  featuredTournament: any;
  tournamentList: any = [];


  allPageConfigurations: any = {
    selected_featured_tournament_id: this.featuredTournament ? this.featuredTournament.id : -1,
    enable_action_button_1: false,
    action_button_1_label: "",
    action_button_1_url: "",
    enable_action_button_2: false,
    action_button_2_label: "",
    action_button_2_url: "",
    title_color: "#000",
    description_color: "#000"
  };

  constructor(private apiManager: ApiManagerService,
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
    this.apiManager.getAllPageConfigurations('homepage')
    .subscribe( res => {
      for(let localConfig in this.allPageConfigurations){
        this.allPageConfigurations[localConfig] = res[localConfig].paramvalue;
      }
      this.getFeaturedTournament();
    });
  }

  getFeaturedTournament(){
    this.apiManager.searchForModel('tournament', 'id' ,this.allPageConfigurations['selected_featured_tournament_id'])
    .subscribe( res => {
      this.featuredTournament = res[this.allPageConfigurations['selected_featured_tournament_id']];
    });
  }

  getTournamentList(){
    this.apiManager.getModelList("tournament")
    .subscribe( res => {
      for(let tournament in res){
        this.tournamentList.push(res[tournament]);
      }
    });
  }

  saveFeaturedTournamentConfiguration(){
    this.apiManager.savePageConfigurationList('homepage', this.allPageConfigurations)
      .subscribe(res => {
        if(res){
          this.snackbar.open("Changes have been successfully saved.", "OK", {
            duration: 3000
          });
        }
      });

  }

}
