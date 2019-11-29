import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LocalStorageManagerService } from 'src/app/services/local-storage-manager.service';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-navigation-bar',
  animations: [ routerTransition ],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  loggedInUserName: string;
  selectedPage: string = '';

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
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.selectedPage = this.router.url.split('/')[this.router.url.split('/').length - 1];
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
