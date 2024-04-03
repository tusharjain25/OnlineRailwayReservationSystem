import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePassengerComponent } from './update-passenger.component';

describe('UpdatePassengerComponent', () => {
  let component: UpdatePassengerComponent;
  let fixture: ComponentFixture<UpdatePassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePassengerComponent]
    });
    fixture = TestBed.createComponent(UpdatePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
