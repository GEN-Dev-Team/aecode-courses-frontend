import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabsSwiperComponent } from './collabs-swiper.component';

describe('CollabsSwiperComponent', () => {
  let component: CollabsSwiperComponent;
  let fixture: ComponentFixture<CollabsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollabsSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollabsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
