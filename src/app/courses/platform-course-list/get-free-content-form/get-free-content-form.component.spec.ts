import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFreeContentFormComponent } from './get-free-content-form.component';

describe('GetFreeContentFormComponent', () => {
  let component: GetFreeContentFormComponent;
  let fixture: ComponentFixture<GetFreeContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetFreeContentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetFreeContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
