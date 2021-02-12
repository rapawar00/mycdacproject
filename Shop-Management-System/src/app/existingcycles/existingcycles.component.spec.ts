import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingcyclesComponent } from './existingcycles.component';

describe('ExistingcyclesComponent', () => {
  let component: ExistingcyclesComponent;
  let fixture: ComponentFixture<ExistingcyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingcyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
