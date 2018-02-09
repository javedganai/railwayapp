import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainatstationComponent } from './trainatstation.component';

describe('TrainatstationComponent', () => {
  let component: TrainatstationComponent;
  let fixture: ComponentFixture<TrainatstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainatstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainatstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
