import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterElementComponent } from './center-element.component';

describe('CenterElementComponent', () => {
  let component: CenterElementComponent;
  let fixture: ComponentFixture<CenterElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterElementComponent]
    });
    fixture = TestBed.createComponent(CenterElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
