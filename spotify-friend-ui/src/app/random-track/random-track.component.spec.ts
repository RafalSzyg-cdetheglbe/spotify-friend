import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTrackComponent } from './random-track.component';

describe('RandomTrackComponent', () => {
  let component: RandomTrackComponent;
  let fixture: ComponentFixture<RandomTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
