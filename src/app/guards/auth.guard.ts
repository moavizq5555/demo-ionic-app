import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';

import { GlobalService } from '../services/global.service';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private global: GlobalService,private menu: MenuController) { }

  async canActivate(): Promise<boolean> {
  
    var isLogged = localStorage.getItem('is_logged');
    if (isLogged) {
      this.menu.enable(true);
      return true;
    } else {
      this.menu.enable(false);
      this.global.helper.navigateRoot('login');
      return false;
    }
  }
}
