import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComponentService } from './component.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private components :ComponentService,private translate:TranslateService) { }

  getRequest(route: string): Observable<any> {
    return from(
      new Promise(async (resolve, reject) => {

          this.http
            .get(
              environment.apiUrl + route
            )
            .subscribe(
              (res: any) => {
                resolve(res);
              },
              async (err: HttpErrorResponse) => {
                if (err.status === 0) {
                  this.components.showToast(this.translate.instant('errorMessages.noInternet'));
                } else {
                  this.components.showToast(this.translate.instant('errorMessages.somethingWentWrong'));
                }
                reject(false);
              }
            );
       
      })
    );
  }
}
