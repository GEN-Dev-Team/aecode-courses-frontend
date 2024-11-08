import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostIconComponent } from './cost-icon.component';

describe('CostIconComponent', () => {
  let component: CostIconComponent;
  let fixture: ComponentFixture<CostIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
