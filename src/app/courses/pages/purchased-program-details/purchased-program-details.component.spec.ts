import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedProgramDetailsComponent } from './purchased-program-details.component';

describe('PurchasedProgramDetailsComponent', () => {
  let component: PurchasedProgramDetailsComponent;
  let fixture: ComponentFixture<PurchasedProgramDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasedProgramDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchasedProgramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
