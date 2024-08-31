import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokIconComponent } from './tiktok-icon.component';

describe('TiktokIconComponent', () => {
  let component: TiktokIconComponent;
  let fixture: ComponentFixture<TiktokIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiktokIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
