import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutMenuIconComponent } from './logout-menu-icon.component';

describe('LogoutMenuIconComponent', () => {
  let component: LogoutMenuIconComponent;
  let fixture: ComponentFixture<LogoutMenuIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutMenuIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
