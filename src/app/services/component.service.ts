import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor( private toast: ToastController,
    private loading: LoadingController,) { }

  async showLoader(msg?: string): Promise<any> {
    return new Promise(async (resolve) => {
      const loader = await this.loading.create({
        message: msg ?? '',
      });
      loader.present();
      resolve(loader);
    });
  }

  async showToast(msg: string, duration?: number, position?: any) {
    const toast = await this.toast.create({
      message: msg,
      color:"danger",
      duration: duration ?? 3000,
      position: position ?? 'top',
      cssClass: 'my-toast',
    });

    if (msg) {
      toast.present();
    }
  }

  async showSuccessToast(msg: string, duration?: number, position?: any) {
    const toast = await this.toast.create({
      message: msg,
      duration: duration ?? 3000,
      position: position ?? 'top',
      cssClass: 'success-toast',
    });

    if (msg) {
      toast.present();
    }
  }
}
