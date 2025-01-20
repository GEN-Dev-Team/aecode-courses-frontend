import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypallIconComponent } from './paypall-icon.component';

describe('PaypallIconComponent', () => {
  let component: PaypallIconComponent;
  let fixture: ComponentFixture<PaypallIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaypallIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaypallIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
