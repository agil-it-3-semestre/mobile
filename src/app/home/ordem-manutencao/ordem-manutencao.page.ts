import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home.page';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../component/ordem/modal/modal.component';

@Component({
  selector: 'app-ordem-manutencao',
  templateUrl: './ordem-manutencao.page.html',
  styleUrls: ['./ordem-manutencao.page.scss'],
})
export class OrdemManutencaoPage implements OnInit {

  public cards = [
    {
      id: 1,
      name: "OM 1001",
      tipoOrdem: "Preventiva"
    },
    {
      id: 2,
      name: "OM 1002",
      tipoOrdem: "Corretiva"
    },
    {
      id: 3,
      name: "OM 1003",
      tipoOrdem: "Preventiva"
    },
    {
      id: 4,
      name: "OM 1004",
      tipoOrdem: "Corretiva"
    }
  ]
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async DetalhesOrdem(ordem) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        "idOrdem": ordem.id,
        "name": ordem.name,
        "tipoOrdem": ordem.tipoOrdem
      }
    });
    return await modal.present();
  }

}
