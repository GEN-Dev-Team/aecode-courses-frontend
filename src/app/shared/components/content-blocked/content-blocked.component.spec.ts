import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockedComponent } from './content-blocked.component';

describe('ContentBlockedComponent', () => {
  let component: ContentBlockedComponent;
  let fixture: ComponentFixture<ContentBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBlockedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
