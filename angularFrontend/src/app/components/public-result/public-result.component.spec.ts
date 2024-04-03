import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicResultComponent } from './public-result.component';

describe('PublicResultComponent', () => {
  let component: PublicResultComponent;
  let fixture: ComponentFixture<PublicResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicResultComponent]
    });
    fixture = TestBed.createComponent(PublicResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
