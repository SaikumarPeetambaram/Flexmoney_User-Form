import { TestBed } from '@angular/core/testing';

import { YourApiServiceService } from './your-api-service.service';

describe('YourApiServiceService', () => {
  let service: YourApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
