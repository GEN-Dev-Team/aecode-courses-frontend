import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningPaymentIconComponent } from './warning-payment-icon.component';

describe('WarningPaymentIconComponent', () => {
  let component: WarningPaymentIconComponent;
  let fixture: ComponentFixture<WarningPaymentIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningPaymentIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarningPaymentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
