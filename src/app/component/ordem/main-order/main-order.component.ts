import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.scss'],
})
export class MainOrderComponent implements OnInit {
  public tabs : any = this.obterTabs();

  constructor() { }

  ngOnInit() {}

  public obterTabs(){    
    return [
      {
        route : "ordem-manutencao",
        icon : "filing",
        name : "Ordens",
        notification : ""
      },
      {
        route : "notification",
        icon : "notifications",
        name : "Notificação",
        notification : "2"
      }
    ] 
  }

}
