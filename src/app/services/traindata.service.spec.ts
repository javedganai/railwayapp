import { TestBed, inject } from '@angular/core/testing';

import { TraindataService } from './traindata.service';

describe('TraindataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraindataService]
    });
  });

  it('should be created', inject([TraindataService], (service: TraindataService) => {
    expect(service).toBeTruthy();
  }));
});
