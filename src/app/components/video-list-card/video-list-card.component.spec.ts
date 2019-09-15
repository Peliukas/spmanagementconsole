import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListCardComponent } from './video-list-card.component';

describe('VideoListCardComponent', () => {
  let component: VideoListCardComponent;
  let fixture: ComponentFixture<VideoListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
