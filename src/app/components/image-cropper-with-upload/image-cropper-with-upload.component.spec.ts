import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCropperWithUploadComponent } from './image-cropper-with-upload.component';

describe('ImageCropperWithUploadComponent', () => {
  let component: ImageCropperWithUploadComponent;
  let fixture: ComponentFixture<ImageCropperWithUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCropperWithUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropperWithUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
