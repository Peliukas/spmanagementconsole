import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ApiManagerService } from 'src/app/services/api-manager.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-list-models',
  templateUrl: './list-models.component.html',
  styleUrls: ['./list-models.component.css']
})
export class ListModelsComponent implements OnInit {


  modelName: string;
  modelList: any[];

  constructor(private apiManager: ApiManagerService,
              private snackBar: MatSnackBar,
              private auth: AuthenticationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.auth.verifyToken()
    .subscribe(authorized => {
      if(!authorized){
        this.auth.redirectToLogin();
      }else{
        this.setModel();
      }
    });
  }

  setModel(){
    this.route.params.subscribe(params => {
      this.modelName = params['modelName']; 
      this.getModelList();
   });
  }

  getModelList(){
    this.apiManager.getModelList(this.modelName)
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
    // needs adaptation to each model
    // if(value){
    //   this.modelList = [];
    //   this.apiManager.searchForModel(this.modelName, value)
    //   .subscribe(res => {
    //     for(let singleres in res){
    //       this.modelList.push(res[singleres]);
    //     }
    //   });
    // }else{
    //   this.getModelList();
    // }
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
    this.apiManager.deleteModel(this.modelName, id)
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
