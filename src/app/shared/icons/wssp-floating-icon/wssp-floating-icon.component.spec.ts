import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsspFloatingIconComponent } from './wssp-floating-icon.component';

describe('WsspFloatingIconComponent', () => {
  let component: WsspFloatingIconComponent;
  let fixture: ComponentFixture<WsspFloatingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WsspFloatingIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WsspFloatingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
