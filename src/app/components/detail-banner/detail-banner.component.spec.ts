import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBannerComponent } from './detail-banner.component';

describe('DetailBannerComponent', () => {
  let component: DetailBannerComponent;
  let fixture: ComponentFixture<DetailBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
