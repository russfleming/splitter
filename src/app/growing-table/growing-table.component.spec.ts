import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingTableComponent } from './growing-table.component';

describe('GrowingTableComponent', () => {
  let component: GrowingTableComponent;
  let fixture: ComponentFixture<GrowingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
