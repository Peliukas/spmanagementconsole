import { Component, OnInit, Input } from '@angular/core';
import { ApiConfig } from 'src/app/api-config';
import { HttpClient } from '@angular/common/http';
import { PageSettingsService } from 'src/app/services/page-settings.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  featuredTournament: any;
  pageSettings: any;

  constructor(private config: ApiConfig,
              private http: HttpClient,
              private pagesettingsservice: PageSettingsService) { }

  ngOnInit() {
    this.pagesettingsservice.getPageSettings("homepage")
      .subscribe(res => {
        let temparray = [];
        for(let setting in res){
          temparray[res[setting].paramname] = res[setting].paramvalue;
        }
        this.pageSettings = temparray;
        this.getFeaturedTournament();
        console.log(this.pageSettings.selected_featured_tournament_id);
      });
    
  }
  
  getFeaturedTournament(){
    this.http.get(this.config.apiUrl + 'search/tournament/id/' + this.pageSettings.selected_featured_tournament_id)
      .subscribe(res => {
        for(let tournament in res){
          this.featuredTournament = res[tournament];
        }
      });
  }



}
