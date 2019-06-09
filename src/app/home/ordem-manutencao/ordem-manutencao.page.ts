import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home.page';
import { ModalController } from '@ionic/angular';
import { OrdemProvider } from '../../providers/ordem-manutencao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordem-manutencao',
  templateUrl: './ordem-manutencao.page.html',
  styleUrls: ['./ordem-manutencao.page.scss'],
})
export class OrdemManutencaoPage implements OnInit {

  public cards : any;
  constructor(private router: Router, private ordemProvider : OrdemProvider) {
    this.buscarOrdens();
   }

  ngOnInit() {
  }

  DetalhesOrdem(ordem) {
    this.router.navigateByUrl('/detalhes/' + ordem.id)
  }

  public buscarOrdens(){
    this.ordemProvider.getOrdens().subscribe(
      (data : any) => {
        this.cards = JSON.parse(data._body);
        console.log(this.cards)
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

}
