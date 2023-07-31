import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDescribtionComponent } from './logo-describtion.component';

describe('LogoDescribtionComponent', () => {
  let component: LogoDescribtionComponent;
  let fixture: ComponentFixture<LogoDescribtionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoDescribtionComponent]
    });
    fixture = TestBed.createComponent(LogoDescribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
