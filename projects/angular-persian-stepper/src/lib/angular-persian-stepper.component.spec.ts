import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPersianStepperComponent } from './angular-persian-stepper.component';

describe('AngularPersianStepperComponent', () => {
  let component: AngularPersianStepperComponent;
  let fixture: ComponentFixture<AngularPersianStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPersianStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPersianStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
