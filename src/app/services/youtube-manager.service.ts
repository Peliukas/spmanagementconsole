import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeManagerService {

  
  apiKey: string = 'AIzaSyAD9aZ2XzNWq4YuPEP_d6O8fFa-tK-w6bA';
  channel: string = "UCvMSmA1Gkzm4Kh2k-VYWM2w";
  url: string = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + this.channel + '&order=date&part=snippet&type=video,id';

  constructor(public http: HttpClient) { }

  getVideosForChanel(maxResults): Observable<Object> {
    return this.http.get(this.url + '&maxResults=' + maxResults);
  }

  getVideoTitle(videoID: string){
    let videoTitleUrl = "https://www.googleapis.com/youtube/v3/videos?key=" + this.apiKey + "&fields=items(snippet(title,tags,channelTitle,publishedAt),statistics(viewCount))&part=snippet,statistics&id=" + videoID;
    return this.http.get(videoTitleUrl);
  }
}
