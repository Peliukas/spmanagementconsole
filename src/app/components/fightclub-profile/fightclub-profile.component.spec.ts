import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightclubProfileComponent } from './fightclub-profile.component';

describe('FightclubProfileComponent', () => {
  let component: FightclubProfileComponent;
  let fixture: ComponentFixture<FightclubProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightclubProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightclubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
