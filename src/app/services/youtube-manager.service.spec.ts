import { TestBed } from '@angular/core/testing';

import { YoutubeManagerService } from './youtube-manager.service';

describe('YoutubeManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeManagerService = TestBed.get(YoutubeManagerService);
    expect(service).toBeTruthy();
  });
});
