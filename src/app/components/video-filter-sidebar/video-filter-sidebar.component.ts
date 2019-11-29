import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiManagerService } from '../../services/api-manager.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-video-filter-sidebar',
  templateUrl: './video-filter-sidebar.component.html',
  styleUrls: ['./video-filter-sidebar.component.css']
})
export class VideoFilterSidebarComponent implements OnInit {

  fighterList: any;
  fightClubList: any;
  weightClassList: any;
  tournamentList: any; 
  countryList: any;
  @Output() filterCriteriaChanged: EventEmitter<any> = new EventEmitter();
  videoFilterFormGroup: FormGroup = new FormGroup({
    searchquery: new FormControl(''),
    fighters: new FormControl(''),
    fightercountries: new FormControl(''),
    fightclubs: new FormControl(''),
    weightclasses: new FormControl(''),
    tournaments: new FormControl(''),
    fightclubcountries: new FormControl(''),
  });
  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
    this.getFighters();
    this.getFightClubs();
    this.getWeightClasses();
  }

  getFighters(){
    this.apiManager.getModelList('fighter')
      .subscribe(res => {
        this.fighterList = [];
        for(let fighterid of Object.keys( res )){
          this.fighterList.push(res[fighterid]);
        }
      });
  }

  getFightClubs(){
    this.apiManager.getModelList('fightclub')
    .subscribe(res => {
      this.fightClubList = [];
      for(let fightclubid of Object.keys( res )){
        this.fightClubList.push(res[fightclubid]);
      }
    });
  }

  getWeightClasses(){
    this.apiManager.getModelList('weightclass')
    .subscribe(res => {
      this.weightClassList = [];
      for(let weightclassid of Object.keys( res )){
        this.weightClassList.push(res[weightclassid]);
      }
    });
  }

  getTournaments(){
    this.apiManager.getModelList('tournament')
    .subscribe(res => {
      this.tournamentList = [];
      for(let tournamentid of Object.keys( res )){
        this.tournamentList.push(res[tournamentid]);
      }
    });
  }
 
  getCountries(){
    this.apiManager.getModelList('country')
    .subscribe(res => {
      this.countryList = [];
      for(let countryid of Object.keys( res )){
        this.countryList.push(res[countryid]);
      }
    });
  }

  triggerFilterOptionChange(){
    this.filterCriteriaChanged.emit(this.videoFilterFormGroup.getRawValue());
  }

}
