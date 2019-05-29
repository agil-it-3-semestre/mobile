import { Component } from '@angular/core';
import { NotificationPage } from '../home/notification/notification.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tabs : any = this.obterTabs();
  public notificationPage = NotificationPage;

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
