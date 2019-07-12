import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfigurationScreenComponent } from './page-configuration-screen.component';

describe('PageConfigurationScreenComponent', () => {
  let component: PageConfigurationScreenComponent;
  let fixture: ComponentFixture<PageConfigurationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConfigurationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfigurationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
