import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityInProgressComponent } from './community-in-progress.component';

describe('CommunityInProgressComponent', () => {
  let component: CommunityInProgressComponent;
  let fixture: ComponentFixture<CommunityInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityInProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
