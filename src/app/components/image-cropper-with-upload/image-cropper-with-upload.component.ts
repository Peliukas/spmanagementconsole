import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-cropper-with-upload',
  templateUrl: './image-cropper-with-upload.component.html',
  styleUrls: ['./image-cropper-with-upload.component.css']
})
export class ImageCropperWithUploadComponent implements OnInit {

  @ViewChild('cropper') cropper:ImageCropperComponent;
  cropperSettings: CropperSettings;
  data:any;
  

  constructor(public dialogRef: MatDialogRef<ImageCropperWithUploadComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogdata: any){
      this.cropperSettings = new CropperSettings();
      this.cropperSettings.width = this.dialogdata.width ? this.dialogdata.width : 100;
      this.cropperSettings.height = this.dialogdata.height ? this.dialogdata.height : 100;
      this.cropperSettings.croppedWidth = this.dialogdata.croppedWidth ? this.dialogdata.croppedWidth : 250;
      this.cropperSettings.croppedHeight = this.dialogdata.croppedHeight ? this.dialogdata.croppedHeight : 250;
      this.cropperSettings.canvasWidth = this.dialogdata.canvasWidth ? this.dialogdata.canvasWidth : 400;
      this.cropperSettings.canvasHeight = this.dialogdata.canvasHeight ? this.dialogdata.canvasHeight : 300;
      this.cropperSettings.noFileInput = true;
      this.data = {};
   }

  ngOnInit() {
  }


  fileChangeListener(event: any) {
    var image:any = new Image();
    image.src = event.src;
    this.data.image = event.src;
    this.cropper.setImage(image);
  }

  cropAndClose(){
    this.dialogRef.close(this.data.image);
  }

}
