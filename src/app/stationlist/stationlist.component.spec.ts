import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationlistComponent } from './stationlist.component';

describe('StationlistComponent', () => {
  let component: StationlistComponent;
  let fixture: ComponentFixture<StationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
