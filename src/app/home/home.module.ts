import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { OrdemManutencaoPage } from '../home/ordem-manutencao/ordem-manutencao.page';
import { NotificationPage } from '../home/notification/notification.page';
import { HomePage } from './home.page';

const routes : Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "ordem-manutencao",
        loadChildren: "./ordem-manutencao/ordem-manutencao.module#OrdemManutencaoPageModule"
      },
      {
        path: "notification",
        loadChildren: "./notification/notification.module#NotificationPageModule"
      },
    ]
  },
  {
    path: "",
    redirectTo: "home/ordem-manutencao",
    pathMatch: "full"
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
