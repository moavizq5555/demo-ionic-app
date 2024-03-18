import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  logo:String = 'assets/images/logo.png';

  constructor() { }

  clearLoginData(): Promise<any> {
    return new Promise(async (resolve) => {
      await this.remove('PMSHotelData');
      this.removeLocalStorage('is_logged');
      resolve(true);
    });
  }

  remove(key: string): Promise<any> {
    return Preferences.remove({
      key: key,
    });
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
