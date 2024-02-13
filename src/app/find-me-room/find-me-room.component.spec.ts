import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeRoomComponent } from './find-me-room.component';

describe('FindMeRoomComponent', () => {
  let component: FindMeRoomComponent;
  let fixture: ComponentFixture<FindMeRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindMeRoomComponent]
    });
    fixture = TestBed.createComponent(FindMeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
