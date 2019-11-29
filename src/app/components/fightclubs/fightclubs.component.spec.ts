import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightclubsComponent } from './fightclubs.component';

describe('FightclubsComponent', () => {
  let component: FightclubsComponent;
  let fixture: ComponentFixture<FightclubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightclubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
