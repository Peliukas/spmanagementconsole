import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFightManagerComponent } from './tournament-fight-manager.component';

describe('TournamentFightManagerComponent', () => {
  let component: TournamentFightManagerComponent;
  let fixture: ComponentFixture<TournamentFightManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFightManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFightManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
