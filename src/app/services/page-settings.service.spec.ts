import { TestBed } from '@angular/core/testing';

import { PageSettingsService } from './page-settings.service';

describe('PageSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageSettingsService = TestBed.get(PageSettingsService);
    expect(service).toBeTruthy();
  });
});
