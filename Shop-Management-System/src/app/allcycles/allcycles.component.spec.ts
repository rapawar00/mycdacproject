import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcyclesComponent } from './allcycles.component';

describe('AllcyclesComponent', () => {
  let component: AllcyclesComponent;
  let fixture: ComponentFixture<AllcyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
