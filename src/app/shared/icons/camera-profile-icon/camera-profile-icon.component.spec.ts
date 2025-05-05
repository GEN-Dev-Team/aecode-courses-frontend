import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraProfileIconComponent } from './camera-profile-icon.component';

describe('CameraProfileIconComponent', () => {
  let component: CameraProfileIconComponent;
  let fixture: ComponentFixture<CameraProfileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraProfileIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CameraProfileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
