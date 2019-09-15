import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFightsComponent } from './browse-fights.component';

describe('BrowseFightsComponent', () => {
  let component: BrowseFightsComponent;
  let fixture: ComponentFixture<BrowseFightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseFightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
