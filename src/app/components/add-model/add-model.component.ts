import {Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CreateFightComponent } from '../create-fight/create-fight.component';

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
  fightList: any = [];
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
    enddate: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
    gender: new FormControl(''),
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
    }
    if(!this.modelId){
      //add new model
      this.http.post(this.config.apiUrl + this.modelName, controlName.getRawValue(), this.httpOptions)
      .subscribe(res => {
        if(res > 0){
          if(this.profileImage){
            this.modelId = res;
            this.uploadImage()
            .subscribe( uploadRes => {
              this.router.navigate(['/list', this.modelName]);
            });
          }else{
            this.router.navigate(['/list', this.modelName]);
          }
        }
      });
    }else{
      //update model
      this.http.post(this.config.apiUrl + "update/" + this.modelName + "/" + this.modelId, controlName.getRawValue(), this.httpOptions)
      .subscribe(res => {
        if(res > 0){
          if(this.profileImage){
            this.uploadImage()
            .subscribe( uploadRes => {
              this.router.navigate(['/list', this.modelName]);
            });
          }else{
            this.router.navigate(['/list', this.modelName]);
          }
        }
      });
    }
  }

  populateInputs(){
    this.http.get(this.config.apiUrl + 'search/' + this.modelName + '/id/' + this.modelId)
      .subscribe(res => {
        this.modelData = res[this.modelId];
        delete this.modelData['id'];
        switch(this.modelName){
          case "fightclub":
          if(this.modelData['image']){
            this.profileImageUrl = this.config.storageUrl + this.modelData['image'];
          }else{
            this.profileImageUrl = '';
          }  
            this.fightclubFormGroup.setValue(this.modelData);
          break;
          case "fighter":
            this.profileImageUrl = this.config.storageUrl + this.modelData['image'];
            this.modelData['image'] = '';
            this.fighterFormGroup.setValue(this.modelData);
          break;
        }
      });
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

  createFight(){
    const dialogRef = this.dialog.open(CreateFightComponent, {
      width: '60vw',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.fightList.push(result);
      }
    });
  }

}
