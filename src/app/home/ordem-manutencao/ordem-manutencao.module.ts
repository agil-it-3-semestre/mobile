import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdemManutencaoPage } from './ordem-manutencao.page';
import { ModalComponent } from '../../component/ordem/modal/modal.component';
import { ModalModule } from '../../component/ordem/modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: OrdemManutencaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalModule
  ],
  declarations: [OrdemManutencaoPage],
  entryComponents: [ModalComponent]
})
export class OrdemManutencaoPageModule {}
