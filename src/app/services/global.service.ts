import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HelperService } from './helper.service';
import { ApiService } from './api.service';
import { ComponentService } from './component.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(  public storage: StorageService,
    public helper: HelperService,
    public component: ComponentService,
    public api: ApiService) { }
}
