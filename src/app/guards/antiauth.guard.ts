import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AntiauthGuard implements CanActivate {
  constructor( public global: GlobalService) { }

  async canActivate(): Promise<boolean> {
  
    var isLogged = localStorage.getItem('is_logged');
    if (!isLogged) {
     
      return true;
    } else {
      this.global.helper.navigateRoot('tabs');
      return false;
    }
  }
  
}
