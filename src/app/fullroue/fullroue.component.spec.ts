import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullroueComponent } from './fullroue.component';

describe('FullroueComponent', () => {
  let component: FullroueComponent;
  let fixture: ComponentFixture<FullroueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullroueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullroueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
