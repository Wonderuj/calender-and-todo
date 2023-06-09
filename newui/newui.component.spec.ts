import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuiComponent } from './newui.component';

describe('NewuiComponent', () => {
  let component: NewuiComponent;
  let fixture: ComponentFixture<NewuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
