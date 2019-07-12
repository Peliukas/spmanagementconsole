import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTournamentComponent } from './featured-tournament.component';

describe('FeaturedTournamentComponent', () => {
  let component: FeaturedTournamentComponent;
  let fixture: ComponentFixture<FeaturedTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
