import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-video-player-window',
  templateUrl: './video-player-window.component.html',
  styleUrls: ['./video-player-window.component.css']
})
export class VideoPlayerWindowComponent implements OnInit {

  baseVideoUrl: any = 'https://www.youtube.com/embed/';
  videoLoaded: boolean = false;
  videoData: any;

  constructor(public dialogRef: MatDialogRef<VideoPlayerWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public videoid: any,
    public sanitizer: DomSanitizer,
    private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.baseVideoUrl += this.videoid + "?modestbranding=1&autohide=1&showinfo=0";
    this.baseVideoUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.baseVideoUrl);
    this.getVideoData();
  }
  
  getVideoData(){
    this.apiManager.getVideoData(this.videoid)
    .subscribe( res => {
        this.videoData = res;
        console.log(this.videoData);
      });
  }

}
