import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutProfileIconComponent } from './logout-profile-icon.component';

describe('LogoutProfileIconComponent', () => {
  let component: LogoutProfileIconComponent;
  let fixture: ComponentFixture<LogoutProfileIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutProfileIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutProfileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
