import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateChipComponent } from './rate-chip.component';

describe('RateChipComponent', () => {
  let component: RateChipComponent;
  let fixture: ComponentFixture<RateChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
