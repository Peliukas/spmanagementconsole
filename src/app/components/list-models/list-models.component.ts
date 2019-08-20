import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list-models',
  templateUrl: './list-models.component.html',
  styleUrls: ['./list-models.component.css']
})
export class ListModelsComponent implements OnInit {


  modelName: string;
  modelList: any[];

  constructor(private http:HttpClient, 
              private config: ApiConfig, 
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.modelName = params['modelName']; 
      this.getModelList();
   });
  }

  getModelList(){
    this.http.get(this.config.apiUrl + this.modelName)
    .subscribe(res => {
      if(res){
        let templist = [];
        for(let singleres in res){
          templist.push(res[singleres]);
        }
        this.modelList = templist;
      }
    });
  }

  searchForModel(value:any){
    if(value){
      this.modelList = [];
      this.http.get(this.config.apiUrl + 'search/' + this.modelName + '/name/' + value)
      .subscribe(res => {
        for(let singleres in res){
          this.modelList.push(res[singleres]);
        }
      });
    }else{
      this.getModelList();
    }
  }

  areYouSure(id: number){
    let snackBarRef = this.snackBar.open("Are you sure?", "Yup", {
      duration: 5000
    });
    snackBarRef.onAction().subscribe(() => {
      this.deleteModel(id);
    });
  }

  deleteModel(id: number){
    this.http.delete(this.config.apiUrl + "deletemodel/" + this.modelName + '/' + id)
      .subscribe(res => {
        if(res){
          this.snackBar.open(this.modelName + " has been removed!", "OK", {
            duration: 2000
          });
          this.getModelList();
        }
      });
  }

}
