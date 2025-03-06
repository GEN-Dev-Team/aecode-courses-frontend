import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCollaboratorsComponent } from './community-collaborators.component';

describe('CommunityCollaboratorsComponent', () => {
  let component: CommunityCollaboratorsComponent;
  let fixture: ComponentFixture<CommunityCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityCollaboratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
