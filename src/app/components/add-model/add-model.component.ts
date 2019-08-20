import {Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
@Injectable()
export class AddModelComponent implements OnInit {
  

  @ViewChild('fileInput') fileInput: ElementRef;
  modelName: string;
  modelData: any;
  modelId: any;
  profileImage: any;
  profileImageUrl: any;
  fightList: any[];
  fightclubFormGroup = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    website: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    image: new FormControl('')
  });
  fighterFormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    fightclubid: new FormControl(''),
    birthdate: new FormControl(''),
    gender: new FormControl(''),
    image: new FormControl('')
  });
  tournamentFormGroup = new FormGroup({
    name: new FormControl(''),
    startdate: new FormControl(''),
    starttime: new FormControl(''),
    enddate: new FormControl(''),
    endtime: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient, 
    private config: ApiConfig, 
    private route: ActivatedRoute, 
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {  
    this.route.params.subscribe(params => {
      this.modelName = params['modelName'];
      if(params['id']){
        this.modelId = params['id'];
        this.populateInputs(); 
      }
   });
  }

  addModel(){
    let controlName: any;
    switch(this.modelName){
      case "fightclub":
      controlName = this.fightclubFormGroup;
      break;
      case "fighter":
      controlName = this.fighterFormGroup;
      break;
      case "tournament":
      controlName = this.tournamentFormGroup;
      break;
    }
    switch(this.modelName){
      case "fightclub":
      case "fighter":
        this.http.post(this.config.apiUrl + "addmodel/" + this.modelName, controlName.getRawValue(), this.httpOptions)
        .subscribe(res => {
          if(res > 0){
            if(this.profileImage){
              this.modelId = res;
              this.uploadImage()
              .subscribe( uploadRes => {
                this.snackBar.open("Changes have been successfully saved", "OK", {duration: 2000});
              });
            }else{
              this.snackBar.open("Changes have been successfully saved", "OK", {duration: 2000});
            }
          }
        });
      break;
      case "tournament":
      let tournamentData: any = controlName.getRawValue();
      tournamentData.tournament_fights = this.fightList;
      tournamentData.id = this.modelId;
      this.http.post(this.config.apiUrl + "addmodel/" + this.modelName, tournamentData, this.httpOptions)
      .subscribe(res => {
        if(res > 0){
          if(this.profileImage){
            this.modelId = res;
            this.uploadImage()
            .subscribe( uploadRes => {
              this.snackBar.open("Changes have been successfully saved", "OK", {duration: 2000});
            });
          }else{
            this.snackBar.open("Changes have been successfully saved", "OK", {duration: 2000});
          }
        }
      });
      break;
    }
  }

  populateInputs(){
    this.http.get(this.config.apiUrl + 'search/' + this.modelName + '/id/' + this.modelId)
      .subscribe(res => {
        this.modelData = res[this.modelId];
        delete this.modelData['id'];
        switch(this.modelName){
          case "fightclub":
            this.profileImageUrl = this.config.storageUrl + this.modelData['image'];
            this.modelData['image'] = '';
            this.fightclubFormGroup.setValue(this.modelData);
          break;
          case "fighter":
            this.profileImageUrl = this.config.storageUrl + this.modelData['image'];
            this.modelData['image'] = '';
            this.fighterFormGroup.setValue(this.modelData);
          break;
          case "tournament":
            this.profileImageUrl = this.config.storageUrl + this.modelData['image'];
            this.modelData['image'] = '';
            this.modelData['starttime'] = ""; 
            this.modelData['endtime'] = ""; 
            this.tournamentFormGroup.setValue(this.modelData);
          break;
        }
      });
  }

  updateFightList(event: any){
    this.fightList = event;
  }

  profileImageChanged(event: any){
    this.profileImage = event.file;
    this.profileImageUrl = event.src;
  }

  uploadImage() {
    let input = new FormData();
    input.append("image", this.profileImage);
    return this.http.post(this.config.apiUrl + this.modelName + "/image/" + this.modelId, input);
  }

}
