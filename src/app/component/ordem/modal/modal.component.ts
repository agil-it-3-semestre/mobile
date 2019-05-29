import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalController: ModalController, private navParams:NavParams) { }

  private idOrdem: number
  
  ngOnInit() {}

  public async fecharModal(){
    await this.modalController.dismiss();
  }

  ionViewWillEnter() {
    this.idOrdem = this.navParams.get('idOrdem')
  }

}
