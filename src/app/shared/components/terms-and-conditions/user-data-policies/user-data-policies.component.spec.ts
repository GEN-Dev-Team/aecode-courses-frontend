import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataPoliciesComponent } from './user-data-policies.component';

describe('UserDataPoliciesComponent', () => {
  let component: UserDataPoliciesComponent;
  let fixture: ComponentFixture<UserDataPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDataPoliciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDataPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
