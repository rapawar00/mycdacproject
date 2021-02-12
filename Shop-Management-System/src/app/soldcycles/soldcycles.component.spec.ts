import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldcyclesComponent } from './soldcycles.component';

describe('SoldcyclesComponent', () => {
  let component: SoldcyclesComponent;
  let fixture: ComponentFixture<SoldcyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldcyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
