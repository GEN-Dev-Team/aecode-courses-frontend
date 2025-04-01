import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessedIconComponent } from './payment-successed-icon.component';

describe('PaymentSuccessedIconComponent', () => {
  let component: PaymentSuccessedIconComponent;
  let fixture: ComponentFixture<PaymentSuccessedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSuccessedIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentSuccessedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
