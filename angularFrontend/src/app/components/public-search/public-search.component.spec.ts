import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSearchComponent } from './public-search.component';

describe('PublicSearchComponent', () => {
  let component: PublicSearchComponent;
  let fixture: ComponentFixture<PublicSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicSearchComponent]
    });
    fixture = TestBed.createComponent(PublicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
