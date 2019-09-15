import { Component, OnInit, Input } from '@angular/core';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-video-list-card',
  templateUrl: './video-list-card.component.html',
  styleUrls: ['./video-list-card.component.css']
})
export class VideoListCardComponent implements OnInit {

  @Input() videoData: any;
  fightContestants: any[] = [];

  constructor(private apiManager: ApiManagerService) {}

  ngOnInit() {
    this.prepareFighterValues();
  }

  prepareFighterValues(){
    for(let fighter of Object.keys(this.videoData.fighters)){
      let fighterValues: any[] = Object.values(this.videoData.fighters);
      for(let i = 0; i < fighterValues.length; i++){
        if(fighterValues[i].id === fighter){
          this.fightContestants.push(fighterValues[i]);
        }
      }
    }
  }

}
