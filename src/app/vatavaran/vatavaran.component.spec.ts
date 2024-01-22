import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatavaranComponent } from './vatavaran.component';

describe('VatavaranComponent', () => {
  let component: VatavaranComponent;
  let fixture: ComponentFixture<VatavaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatavaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VatavaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
