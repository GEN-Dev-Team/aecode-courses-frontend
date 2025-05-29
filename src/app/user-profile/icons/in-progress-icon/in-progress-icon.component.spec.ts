import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressIconComponent } from './in-progress-icon.component';

describe('InProgressIconComponent', () => {
  let component: InProgressIconComponent;
  let fixture: ComponentFixture<InProgressIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InProgressIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InProgressIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
