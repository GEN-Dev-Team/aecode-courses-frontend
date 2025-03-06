import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoommunityHeaderItemComponent } from './coommunity-header-item.component';

describe('CoommunityHeaderItemComponent', () => {
  let component: CoommunityHeaderItemComponent;
  let fixture: ComponentFixture<CoommunityHeaderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoommunityHeaderItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoommunityHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
