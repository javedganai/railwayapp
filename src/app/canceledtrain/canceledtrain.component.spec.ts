import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledtrainComponent } from './canceledtrain.component';

describe('CanceledtrainComponent', () => {
  let component: CanceledtrainComponent;
  let fixture: ComponentFixture<CanceledtrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanceledtrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceledtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
