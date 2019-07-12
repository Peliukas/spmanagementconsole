import { Injectable } from '@angular/core';
import { ApiConfig } from '../api-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageSettingsService {

  constructor(private config: ApiConfig,
              private http: HttpClient) { }

  
              
  getPageSettings(page: string){
    return this.http.get(this.config.apiUrl + 'pageconfiguration/' + page);
  }

}
