import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/api-config';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ImageCropperWithUploadComponent } from '../image-cropper-with-upload/image-cropper-with-upload.component';

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

  constructor(private http:HttpClient, 
    private config: ApiConfig,
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
    this.http.get(this.config.apiUrl + "sponsor")
      .subscribe(result => {
         this.sponsorList = [];
         for(let sponsor in result){
          this.sponsorList.push(result[sponsor]);
         }
    });
  }

  saveSponsor(){
    this.http.post(this.config.apiUrl + "addmodel/sponsor", this.selectedSponsor, this.httpOptions)
    .subscribe(result => {
      if(result){
        this.selectedSponsor.id = result;
        this.getSponsorList();
        this.snackBar.open("Sponsor has been successfully saved", "OK", {duration: 3000});
      }
    });
  }
  
  removeSponsor(){
    this.http.delete(this.config.apiUrl + "deletemodel/sponsor/" + this.selectedSponsor.id, this.httpOptions)
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
