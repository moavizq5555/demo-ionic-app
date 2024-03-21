import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AntiauthGuard implements CanActivate {
  constructor( public global: GlobalService,private menu: MenuController) { }

  async canActivate(): Promise<boolean> {
  
    var isLogged = localStorage.getItem('is_logged');
    if (!isLogged) {
      this.menu.enable(false);
      return true;
    } else {
      this.menu.enable(true);
      this.global.helper.navigateRoot('characters-list');
      return false;
    }
  }
  
}
