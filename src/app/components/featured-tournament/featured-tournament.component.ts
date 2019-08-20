import { Component, OnInit, Input } from '@angular/core';
import { ApiConfig } from 'src/app/api-config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-featured-tournament',
  templateUrl: './featured-tournament.component.html',
  styleUrls: ['./featured-tournament.component.css']
})
export class FeaturedTournamentComponent implements OnInit {

  @Input() featuredTournament: any;
  @Input() customConfig: any;
  allPageConfigurations: any = [];
  constructor(private http: HttpClient,private config: ApiConfig) { }

  ngOnInit() {
    this.getAllPageConfigurations();
  }


  getAllPageConfigurations(){
    if(!this.customConfig){
      this.http.get(this.config.apiUrl + 'pageconfig/homepage')
      .subscribe( res => {
        for(let c in res){
          this.allPageConfigurations[c] = res[c].paramvalue;
        }
      });
    }else{
      this.allPageConfigurations = this.customConfig;
      console.log(this.allPageConfigurations);
    }
  }

}
