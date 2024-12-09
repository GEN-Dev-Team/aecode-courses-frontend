import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGetFreeFormIconComponent } from './check-get-free-form-icon.component';

describe('CheckGetFreeFormIconComponent', () => {
  let component: CheckGetFreeFormIconComponent;
  let fixture: ComponentFixture<CheckGetFreeFormIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckGetFreeFormIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckGetFreeFormIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
