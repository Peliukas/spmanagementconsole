import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentProfileComponent } from './tournament-profile.component';

describe('TournamentProfileComponent', () => {
  let component: TournamentProfileComponent;
  let fixture: ComponentFixture<TournamentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
