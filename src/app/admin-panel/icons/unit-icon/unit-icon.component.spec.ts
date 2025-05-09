import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitIconComponent } from './unit-icon.component';

describe('UnitIconComponent', () => {
  let component: UnitIconComponent;
  let fixture: ComponentFixture<UnitIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
