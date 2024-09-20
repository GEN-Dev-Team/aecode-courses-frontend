import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorIconComponent } from './separator-icon.component';

describe('SeparatorIconComponent', () => {
  let component: SeparatorIconComponent;
  let fixture: ComponentFixture<SeparatorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparatorIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeparatorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
