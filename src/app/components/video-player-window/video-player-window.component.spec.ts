import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerWindowComponent } from './video-player-window.component';

describe('VideoPlayerWindowComponent', () => {
  let component: VideoPlayerWindowComponent;
  let fixture: ComponentFixture<VideoPlayerWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
