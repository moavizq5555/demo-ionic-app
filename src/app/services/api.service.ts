import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComponentService } from './component.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private components :ComponentService) { }

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
                  this.components.showToast('No internet access');
                } else {
                  this.components.showToast('Something went wrong! 500 error');
                }
                reject(false);
              }
            );
       
      })
    );
  }
}
