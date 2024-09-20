import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCreatedIconComponent } from './acc-created-icon.component';

describe('AccCreatedIconComponent', () => {
  let component: AccCreatedIconComponent;
  let fixture: ComponentFixture<AccCreatedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccCreatedIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccCreatedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
