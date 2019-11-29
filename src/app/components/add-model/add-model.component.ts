import {Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ApiManagerService } from 'src/app/services/api-manager.service';
import { ImageCropperWithUploadComponent } from '../image-cropper-with-upload/image-cropper-with-upload.component';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
@Injectable()
export class AddModelComponent implements OnInit {
  
  countryList: any[];
  modelName: string;
  modelData: any;
  modelId: any;
  modelImage: any;
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
    country: new FormControl(''),
    image: new FormControl('')
  });
  fighterFormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    nickname: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    fightclubid: new FormControl(''),
    birthdate: new FormControl(''),
    gender: new FormControl(''),
    country: new FormControl(''),
    image: new FormControl(''),
    bio: new FormControl(''),
    facebookurl: new FormControl(''),
    twitterurl: new FormControl(''),
    instagramurl: new FormControl(''),
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

  constructor(private apiManager: ApiManagerService, 
    private snackBar: MatSnackBar,
    private route: ActivatedRoute, 
    private router: Router, 
    public dialog: MatDialog) { }

  ngOnInit() {  
    this.route.params.subscribe(params => {
      this.modelName = params['modelName'];
      this.getCountryList();
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
        let requestData = controlName.getRawValue();
        requestData.id = this.modelId;
        requestData.image = this.modelImage;
        this.apiManager.addModel(this.modelName, requestData)
        .subscribe(res => {
          if(res > 0){
            this.snackBar.open("Changes have been successfully saved", "OK", {duration: 2000});
            this.router.navigate(['/admin/edit/' + this.modelName + '/' + res]);
          }
        });
      break;
      case "tournament":
      let tournamentData: any = controlName.getRawValue();
      tournamentData.tournament_fights = this.fightList;
      tournamentData.id = this.modelId;
      tournamentData.image = this.modelImage;
      this.apiManager.addModel(this.modelName, tournamentData)
      .subscribe(res => {
        if(res > 0){
          this.snackBar.open("Changes have been successfully saved", "OK", {duration: 2000});
          this.router.navigate(['/admin/edit/' + this.modelName + '/' + res]);
        }
      });
      break;
    }
  }

  populateInputs(){
    this.apiManager.searchForModel(this.modelName, 'id', this.modelId)
      .subscribe(res => {
        this.modelData = res[this.modelId];
        delete this.modelData['id'];
        switch(this.modelName){
          case "fightclub":
            this.modelImage = this.modelData['image'];
            this.fightclubFormGroup.setValue(this.modelData);
          break;
          case "fighter":
            this.modelImage = this.modelData['image'];
            this.fighterFormGroup.setValue(this.modelData);
          break;
          case "tournament":
            this.modelImage = this.modelData['image'];
            this.tournamentFormGroup.setValue(this.modelData);
          break;
        }
      });
  }

  openCropperDialog(){
    let cropperSettings: any;
    switch(this.modelName){
      case "fightclub":
      case "tournament":
        cropperSettings = {
          width: 600,
          height: 270,
          croppedWidth: 800,
          croppedHeight: 350,
          canvasWidth: 600,
          canvasHeight: 270
        };
      break;
      case "fighter":
        cropperSettings = {
          width: 250,
          height: 250,
          croppedWidth: 250,
          croppedHeight: 250,
          canvasWidth: 300,
          canvasHeight: 300
        };
      break;
    }
    const dialogRef = this.dialog.open(ImageCropperWithUploadComponent, {
      width: '700px',
      data: cropperSettings
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.modelImage = result;
      }
    });
  }

  
  getCountryList(){
    this.apiManager.getModelList('country')
      .subscribe(res => {
        this.countryList = [];
        for(let countryId of Object.keys(res)){
          this.countryList.push(res[countryId]);
        }
        // switch(this.modelName){
        //   case "fighter":
        //     this.fighterFormGroup.country.setValue(this.countryList);
        //   break;
        // }
      });
  }

  updateFightList(event: any){
    this.fightList = event;
  }

  profileImageChanged(event: any){
    this.profileImage = event.file;
    this.profileImageUrl = event.src;
  }


}
