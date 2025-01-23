import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferbgIconComponent } from './offerbg-icon.component';

describe('OfferbgIconComponent', () => {
  let component: OfferbgIconComponent;
  let fixture: ComponentFixture<OfferbgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferbgIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferbgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
