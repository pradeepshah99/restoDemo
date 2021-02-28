import { TestBed } from '@angular/core/testing';

import { MyrestroService } from './myrestro.service';

describe('MyrestroService', () => {
  let service: MyrestroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyrestroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
