import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSellComponent } from './data-sell.component';

describe('DataSellComponent', () => {
  let component: DataSellComponent;
  let fixture: ComponentFixture<DataSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSellComponent]
    });
    fixture = TestBed.createComponent(DataSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
