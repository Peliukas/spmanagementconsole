import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedFighterListComponent } from './unassigned-fighter-list.component';

describe('UnassignedFighterListComponent', () => {
  let component: UnassignedFighterListComponent;
  let fixture: ComponentFixture<UnassignedFighterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignedFighterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedFighterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
