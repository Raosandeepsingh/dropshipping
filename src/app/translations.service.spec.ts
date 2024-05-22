import { TestBed } from '@angular/core/testing';

import { Translations } from './translations.service';

describe('TranslationsService', () => {
  let service: Translations;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Translations);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
