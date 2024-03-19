import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';

import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( public global: GlobalService) { }

  async canActivate(): Promise<boolean> {
  
    var isLogged = localStorage.getItem('is_logged');
    if (isLogged) {
      return true;
    } else {
      this.global.helper.navigateRoot('login');
      return false;
    }
  }
}
