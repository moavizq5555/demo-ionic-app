import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private global: GlobalService) { }
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
