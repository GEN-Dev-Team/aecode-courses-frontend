import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMobileComponent } from './no-mobile.component';

describe('NoMobileComponent', () => {
  let component: NoMobileComponent;
  let fixture: ComponentFixture<NoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
