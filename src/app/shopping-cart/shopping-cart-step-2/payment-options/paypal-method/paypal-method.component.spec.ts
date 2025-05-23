import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalMethodComponent } from './paypal-method.component';

describe('PaypalMethodComponent', () => {
  let component: PaypalMethodComponent;
  let fixture: ComponentFixture<PaypalMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaypalMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaypalMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
