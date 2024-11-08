import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionIconComponent } from './session-icon.component';

describe('SessionIconComponent', () => {
  let component: SessionIconComponent;
  let fixture: ComponentFixture<SessionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
