import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersSwiperComponent } from './partners-swiper.component';

describe('PartnersSwiperComponent', () => {
  let component: PartnersSwiperComponent;
  let fixture: ComponentFixture<PartnersSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersSwiperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnersSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
