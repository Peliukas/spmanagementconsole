import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { LocalStorageManagerService } from 'src/app/services/local-storage-manager.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  loggedInUserName: string;

  constructor(private auth: AuthenticationService,
              private storageManager: LocalStorageManagerService,
              private router: Router) { }

  ngOnInit() {
    this.loggedInUserName = localStorage.getItem('username');
    this.storageManager.changes
    .subscribe(changeSubject => {
      if(changeSubject.key === 'username'){
        this.loggedInUserName = changeSubject.value;
      }
    });
  }

  logout(){
    this.auth.logout()
    .subscribe(result => {
      this.storageManager.clear('token');
      this.storageManager.clear('username');
      this.storageManager.clear('userid');
      this.loggedInUserName = '';
      this.router.navigate(['/sp-login']);
    });
  }

}
