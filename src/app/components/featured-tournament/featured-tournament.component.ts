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
  storageUrl: string;
  allPageConfigurations: any = [];
  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.storageUrl = this.apiManager.getStorageUrl();
    this.getAllPageConfigurations();
  }


  getAllPageConfigurations(){
    if(!this.customConfig){
      this.apiManager.getAllPageConfigurations("homepage")
      .subscribe( res => {
        for(let c in res){
          this.allPageConfigurations[c] = res[c].paramvalue;
        }
      });
    }else{
      this.allPageConfigurations = this.customConfig;
    }
  }

}
