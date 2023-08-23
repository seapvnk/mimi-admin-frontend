import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimelineComponent } from './show-timeline.component';

describe('ShowTimelineComponent', () => {
  let component: ShowTimelineComponent;
  let fixture: ComponentFixture<ShowTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
