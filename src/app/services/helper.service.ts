import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private storage: StorageService,private nav: NavController,private location: Location,private translate: TranslateService) { }

  initalizei18n(){
    this.translate.setDefaultLang('en');
    const browserLang:any = this.translate.getBrowserLang();
    this.translate.use(browserLang);
  }
  navigateRoot(page: string, params?: any) {
    this.nav.navigateRoot([page, params ?? {}]);
  }

  navigateForward(page: string, params?: any) {
    this.nav.navigateForward([
      page,
      {
        ...params,
      },
    ]);
  }
  
  async logout() {
    await this.storage.clearLoginData();
    this.navigateRoot('login');
  }

  locationBack() {
    this.location.back();
  }
}
