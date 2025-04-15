import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMenuIconComponent } from './management-menu-icon.component';

describe('ManagementMenuIconComponent', () => {
  let component: ManagementMenuIconComponent;
  let fixture: ComponentFixture<ManagementMenuIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementMenuIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
