import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaIconComponent } from './ia-icon.component';

describe('IaIconComponent', () => {
  let component: IaIconComponent;
  let fixture: ComponentFixture<IaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
