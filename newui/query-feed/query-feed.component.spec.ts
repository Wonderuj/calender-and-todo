import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFeedComponent } from './query-feed.component';

describe('QueryFeedComponent', () => {
  let component: QueryFeedComponent;
  let fixture: ComponentFixture<QueryFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
