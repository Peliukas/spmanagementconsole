import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-player-window',
  templateUrl: './video-player-window.component.html',
  styleUrls: ['./video-player-window.component.css']
})
export class VideoPlayerWindowComponent implements OnInit {

  baseVideoUrl: any = 'https://www.youtube.com/embed/';
  videoLoaded: boolean = false;

  constructor(public dialogRef: MatDialogRef<VideoPlayerWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public videoData: any,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.baseVideoUrl += this.videoData.videoid + "?modestbranding=1&autohide=1&showinfo=0";
    this.baseVideoUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.baseVideoUrl);
    console.log(this.videoData);
  }

}
