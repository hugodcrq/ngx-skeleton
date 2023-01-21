import { TestBed } from '@angular/core/testing';

import { NgxSkeletonService } from './ngx-skeleton.service';

describe('NgxSkeletonService', () => {
  let service: NgxSkeletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSkeletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
