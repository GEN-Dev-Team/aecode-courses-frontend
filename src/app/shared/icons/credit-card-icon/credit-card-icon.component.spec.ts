import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardIconComponent } from './credit-card-icon.component';

describe('CreditCardIconComponent', () => {
  let component: CreditCardIconComponent;
  let fixture: ComponentFixture<CreditCardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditCardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
