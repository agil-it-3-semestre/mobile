import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class Toasts {
    constructor(public toastCtrl: ToastController) {

   }

  private async presentToast(message : string, duration : number) {
    let options = {
        message: message,
        duration : duration
    }

    let toast = await this.toastCtrl.create(options);
    
    toast.present();
}

  public toastShow(message : string = 'User was added successfully', duration : number = 1000){
    this.presentToast(message, duration)
  }

  public toastLoginShow(message, duration){
    this.presentToast(message, duration)
  }

}