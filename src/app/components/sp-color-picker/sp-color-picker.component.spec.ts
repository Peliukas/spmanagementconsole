import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpColorPickerComponent } from './sp-color-picker.component';

describe('SpColorPickerComponent', () => {
  let component: SpColorPickerComponent;
  let fixture: ComponentFixture<SpColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
