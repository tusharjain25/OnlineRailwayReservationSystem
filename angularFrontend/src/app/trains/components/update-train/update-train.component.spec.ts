import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainComponent } from './update-train.component';

describe('UpdateTrainComponent', () => {
  let component: UpdateTrainComponent;
  let fixture: ComponentFixture<UpdateTrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrainComponent]
    });
    fixture = TestBed.createComponent(UpdateTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
