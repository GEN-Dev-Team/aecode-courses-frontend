import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamanaiMobileIconComponent } from './shamanai-mobile-icon.component';

describe('ShamanaiMobileIconComponent', () => {
  let component: ShamanaiMobileIconComponent;
  let fixture: ComponentFixture<ShamanaiMobileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShamanaiMobileIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShamanaiMobileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
