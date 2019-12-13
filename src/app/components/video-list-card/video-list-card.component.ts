import { Component, OnInit, Input } from '@angular/core';
import { VideoPlayerWindowComponent } from '../video-player-window/video-player-window.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-video-list-card',
  templateUrl: './video-list-card.component.html',
  styleUrls: ['./video-list-card.component.css']
})
export class VideoListCardComponent implements OnInit {

  @Input() videoData: any;
  imageLoaded: boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  showVideoPlayer(){
    const dialogRef = this.dialog.open(VideoPlayerWindowComponent, {
      height: '90vh',
      width: '80vw',
      id: 'video-payer-window-content-container',
      data: this.videoData.videoid
    });

  }

}
