import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currenturl: string = "";

  constructor(private route: ActivatedRoute, private router: Router){
    this.currenturl = this.router.url;
    console.log(this.currenturl);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
