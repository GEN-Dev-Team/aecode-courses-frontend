import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProfileInProgressComponent } from './section-profile-in-progress.component';

describe('SectionProfileInProgressComponent', () => {
  let component: SectionProfileInProgressComponent;
  let fixture: ComponentFixture<SectionProfileInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProfileInProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionProfileInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
