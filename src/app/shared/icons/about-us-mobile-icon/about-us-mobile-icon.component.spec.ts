import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMobileIconComponent } from './about-us-mobile-icon.component';

describe('AboutUsMobileIconComponent', () => {
  let component: AboutUsMobileIconComponent;
  let fixture: ComponentFixture<AboutUsMobileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsMobileIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsMobileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
