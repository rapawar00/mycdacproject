import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcyclesComponent } from './addcycles.component';

describe('AddcyclesComponent', () => {
  let component: AddcyclesComponent;
  let fixture: ComponentFixture<AddcyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
