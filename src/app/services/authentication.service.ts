import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api-config';
import { Router } from '@angular/router';
import { LocalStorageManagerService } from './local-storage-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, 
              private router: Router,
              private storageManager: LocalStorageManagerService,
              private config: ApiConfig) { }

  login(email: string, password: string){
    return this.http.post(this.config.apiUrl + "login", {email, password});
  }

  logout(){
    let verificationOptions = this.config.httpOptions;
    verificationOptions.headers = verificationOptions.headers.set("Bearer", localStorage.getItem("token"));
    return this.http.post(this.config.apiUrl + 'logout', verificationOptions);
  }
  
  verifyToken(){
    let verificationOptions = this.config.httpOptions;
    try{
      verificationOptions.headers = verificationOptions.headers.set("Bearer", localStorage.getItem("token") ? localStorage.getItem("token") : 'none');
    }catch(e){
      // verificationOptions = this.config.httpOptions;
    }
    return this.http.get(this.config.apiUrl + "verifytoken", verificationOptions);
  }

  redirectToLogin(){
    this.router.navigate(['/sp-login']);
  }

}
