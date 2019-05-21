import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFightComponent } from './create-fight.component';

describe('CreateFightComponent', () => {
  let component: CreateFightComponent;
  let fixture: ComponentFixture<CreateFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
