import { Component, OnInit, HostListener  } from '@angular/core';
import { ApiManagerService } from 'src/app/services/api-manager.service';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-browse-fights',
  templateUrl: './browse-fights.component.html',
  styleUrls: ['./browse-fights.component.css']
})
export class BrowseFightsComponent implements OnInit {

  filteredResults: any = [];
  displayedResults: any = [];
  allChannelVideos: any = [];
  constructor(private apiManager: ApiManagerService) { 
  }
  
  ngOnInit() {
    this.getAllChannelVideos();
  }
  

  filterVideos(query: any){
    this.filteredResults = this.allChannelVideos;
    let fightclubMatch = this.searchByFightclubs(query.fightclubs);
    if(fightclubMatch.length > 0){
      this.filteredResults = fightclubMatch;
    }
    let searchQueryMatch = this.searchByQuery(query.searchquery);
    if(searchQueryMatch.length > 0 ){
      this.filteredResults = searchQueryMatch;
    }
    this.displayedResults = this.filteredResults;
    
  }

  searchByQuery(searchquery: string){
    return this.filteredResults.filter( video => {
      if(searchquery && video.title.toLowerCase().includes(searchquery.toLowerCase())){
        return video;
      }
    });
  }

  searchByTournaments(tournaments: any){
    this.filteredResults = this.allChannelVideos.filter( video => {
      if( video.tournament && tournaments.includes(video.tournament.id)){
        return video;
      }
    });
  }

  searchByFightclubs(fightclubs: any){
    return this.filteredResults.filter( video => {
      try{
        if( video.relatedfighters && video.relatedfighters[0] && video.relatedfighters[1] &&        
            fightclubs.includes(video.relatedfighters[0].fightclub.id) ||
            fightclubs.includes(video.relatedfighters[1].fightclub.id) ){
          return video;
        }
      }catch(e){}
    });
  }

  getAllChannelVideos(){
    this.apiManager.getAllChannelVideos()
      .subscribe( res => {
        let keys = Object.keys(res);
        for(let videoid of keys){
          this.allChannelVideos.push(res[videoid]);
        }
        this.filteredResults = this.allChannelVideos;
        this.displayedResults = this.filteredResults.slice(0, 24);
      });
  }

  addNextPage(){
    if(this.displayedResults.length + 24 < this.filteredResults.length){
      this.displayedResults = this.displayedResults.concat(this.filteredResults.slice(this.displayedResults.length, this.displayedResults.length + 24));
    }else{
      this.displayedResults = this.filteredResults;
    }
  }


}
