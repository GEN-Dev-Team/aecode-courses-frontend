import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardMethodComponent } from './credit-card-method.component';

describe('CreditCardMethodComponent', () => {
  let component: CreditCardMethodComponent;
  let fixture: ComponentFixture<CreditCardMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditCardMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
