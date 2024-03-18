import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private storage: StorageService,private nav: NavController,private location: Location,) { }


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
