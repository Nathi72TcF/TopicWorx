import { TestBed } from '@angular/core/testing';

import { TopicWorxService } from './topic-worx.service';

describe('TopicWorxService', () => {
  let service: TopicWorxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicWorxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
