import { Component, OnInit } from '@angular/core';
import { OrdemProvider } from '../../../providers/ordem-manutencao';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public id : any;
  public detalhesOrdem : any;
  
  constructor(public activeRoute : ActivatedRoute, private router: Router, private ordemProvider : OrdemProvider) {
    this.id = this.activeRoute.snapshot.paramMap.get('ordem');
    this.getOrdemManutencao()
   }

  ngOnInit() {
  }

  public adicionarOperacao(){
    console.log('show')
  }

  public getOrdemManutencao(){
    this.ordemProvider.getOrdemManutencao(this.id).subscribe(
      (data : any) => {
        this.detalhesOrdem = JSON.parse(data._body);

        console.log(this.detalhesOrdem)
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

  public tratarData(data){
    let objData = new Date(data)
    return objData.getDay() + '/' + objData.getMonth() + '/' + objData.getFullYear() + ' - ' + objData.getHours() + ':' + objData.getMinutes();
  }

  public abrirTelaProblema(operation){
    this.router.navigateByUrl('/problema/' + operation)
  }
  
}
