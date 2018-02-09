import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachcomposationComponent } from './coachcomposation.component';

describe('CoachcomposationComponent', () => {
  let component: CoachcomposationComponent;
  let fixture: ComponentFixture<CoachcomposationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachcomposationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachcomposationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
