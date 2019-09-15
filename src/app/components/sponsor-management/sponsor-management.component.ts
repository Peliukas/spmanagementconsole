import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ImageCropperWithUploadComponent } from '../image-cropper-with-upload/image-cropper-with-upload.component';
import { ApiManagerService } from 'src/app/services/api-manager.service';

@Component({
  selector: 'app-sponsor-management',
  templateUrl: './sponsor-management.component.html',
  styleUrls: ['./sponsor-management.component.css']
})
export class SponsorManagementComponent implements OnInit {

  selectedSponsor: any = {
    id: 0,
    name: "",
    url: "",
    logo: ""
  };
  sponsorList: any = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private apiManager: ApiManagerService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) {
    
   }

  ngOnInit() {
    this.getSponsorList();
  }



  openCropperDialog(){
    const dialogRef = this.dialog.open(ImageCropperWithUploadComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.selectedSponsor.logo = result;      
    });
  }

  getSponsorList(){
    this.apiManager.getModelList("sponsor")
      .subscribe(result => {
         this.sponsorList = [];
         for(let sponsor in result){
          this.sponsorList.push(result[sponsor]);
         }
    });
  }

  saveSponsor(){
    this.apiManager.addModel('sponsor', this.selectedSponsor)
    .subscribe(result => {
      if(result){
        this.selectedSponsor.id = result;
        this.getSponsorList();
        this.snackBar.open("Sponsor has been successfully saved", "OK", {duration: 3000});
      }
    });
  }
  
  removeSponsor(){
    this.apiManager.deleteModel('sponsor', this.selectedSponsor.id)
    .subscribe(result => {
      if(result){
        this.getSponsorList();
        this.resetSelectedSponsor();
        this.snackBar.open("Sponsor has been successfully removed", "OK", {duration: 3000});
      }
    });
  }

  resetSelectedSponsor(){
    this.selectedSponsor = {
      id: 0,
      name: "",
      url: "",
      logo: ""
    };
  }

}
