import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDetailPageComponent } from './destination-detail-page.component';

describe('DestinationDetailPageComponent', () => {
  let component: DestinationDetailPageComponent;
  let fixture: ComponentFixture<DestinationDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinationDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
