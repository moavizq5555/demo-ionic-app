import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global.service';
import { HelperService } from './helper.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ComponentService } from './component.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('GlobalService', () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,TranslateModule.forRoot()],
      providers: [
        GlobalService,
        HelperService,
        ComponentService,
        ApiService,
        { provide: TranslateService, useValue: {} } // Provide a mock TranslateService
      ]
    });
    service = TestBed.inject(GlobalService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
