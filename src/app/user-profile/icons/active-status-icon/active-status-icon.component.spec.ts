import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStatusIconComponent } from './active-status-icon.component';

describe('ActiveStatusIconComponent', () => {
  let component: ActiveStatusIconComponent;
  let fixture: ComponentFixture<ActiveStatusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveStatusIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveStatusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
