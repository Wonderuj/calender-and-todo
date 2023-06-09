import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderuiComponent } from './calenderui.component';

describe('CalenderuiComponent', () => {
  let component: CalenderuiComponent;
  let fixture: ComponentFixture<CalenderuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
