import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FapDropdownItemComponent } from './fap-dropdown-item.component';

describe('FapDropdownItemComponent', () => {
  let component: FapDropdownItemComponent;
  let fixture: ComponentFixture<FapDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FapDropdownItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FapDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
