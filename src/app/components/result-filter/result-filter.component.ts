import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiConfig } from 'src/app/api-config';
import { HttpClient } from '@angular/common/http';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-result-filter',
  templateUrl: './result-filter.component.html',
  styleUrls: ['./result-filter.component.css']
})
export class ResultFilterComponent implements OnInit {

  @Input() filterType: string;
  @Input() params: any; 
  @Output() filteredResults: EventEmitter<any> = new EventEmitter();
  selectedSearchIndex: string;


  clubMembersSearchIndexes: any = [
    'firstname',
    'lastname',
    'age',
    'weight'
  ];

  constructor(private apiManager: ApiManagerService) { }

  ngOnInit() {
    switch(this.filterType){
      case "clubmembers":
      case "unassignedfighters":
       this.selectedSearchIndex = 'firstname';
      break;
    }
  }

  searchFieldValueChanged(event: any){
    let searchFieldValue = event.target.value;
    switch(this.filterType){
      case "clubmembers":
        if(searchFieldValue){
          this.apiManager.getClubMembersBy(this.params.clubId, this.selectedSearchIndex, searchFieldValue)
          .subscribe(res => {
            this.filteredResults.emit(res);
          });
        }else{
          this.apiManager.getClubMembers(this.params.clubId)
          .subscribe(res => {
            this.filteredResults.emit(res);
          });
        }
      break;
      case "unassignedfighters":
        if(searchFieldValue){
          this.apiManager.getUnassignedFightersBy(this.selectedSearchIndex, searchFieldValue)
            .subscribe(res => {
              this.filteredResults.emit(res);
            });
        }else{
          this.apiManager.getUnassignedFighters()
            .subscribe(res => {
              this.filteredResults.emit(res);
            });
        }
      break;
    }

   
  }

  selectedSearchIndexChanged(event: any){
    this.selectedSearchIndex = event.value;
  }

}
