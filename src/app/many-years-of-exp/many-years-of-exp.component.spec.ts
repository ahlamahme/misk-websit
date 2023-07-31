import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyYearsOfExpComponent } from './many-years-of-exp.component';

describe('ManyYearsOfExpComponent', () => {
  let component: ManyYearsOfExpComponent;
  let fixture: ComponentFixture<ManyYearsOfExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManyYearsOfExpComponent]
    });
    fixture = TestBed.createComponent(ManyYearsOfExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
