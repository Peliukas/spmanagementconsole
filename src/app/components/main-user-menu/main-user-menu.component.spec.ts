import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserMenuComponent } from './main-user-menu.component';

describe('MainUserMenuComponent', () => {
  let component: MainUserMenuComponent;
  let fixture: ComponentFixture<MainUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
