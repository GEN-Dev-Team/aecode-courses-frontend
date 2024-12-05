import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToolIconComponent } from './search-tool-icon.component';

describe('SearchToolIconComponent', () => {
  let component: SearchToolIconComponent;
  let fixture: ComponentFixture<SearchToolIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchToolIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchToolIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
