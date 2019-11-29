import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFilterSidebarComponent } from './video-filter-sidebar.component';

describe('VideoFilterSidebarComponent', () => {
  let component: VideoFilterSidebarComponent;
  let fixture: ComponentFixture<VideoFilterSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFilterSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
