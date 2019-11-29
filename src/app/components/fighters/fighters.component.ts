import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../../services/api-manager.service';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class FightersComponent implements OnInit {

  fighterList: any;

  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.getFighters();
  }

  getFighters(){
    this.fighterList = [];
    this.apiManager.getModelList('fighter')
    .subscribe(result => {
      for(let key in result){
        this.fighterList.push(result[key]);
      }
    });
  }
}
