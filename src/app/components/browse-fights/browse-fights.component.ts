import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-browse-fights',
  templateUrl: './browse-fights.component.html',
  styleUrls: ['./browse-fights.component.css']
})
export class BrowseFightsComponent implements OnInit {

  videoList: any;

  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.apiManager.getVideos()
    .subscribe(videoList => {
      console.log(videoList);
      this.videoList = videoList;
    });
  }



}
