import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { MainOrderComponent } from './main-order.component';

const routes : Routes = [
  {
    path: "main-order",
    component: MainOrderComponent,
    children: [
      {
        path: "details",
        loadChildren: "./details/details.module#DetailsPageModule"
      },
      {
        path: "problems",
        loadChildren: "./problems/problems.module#ProblemsPageModule"
      },
      {
        path: "",
        redirectTo: "ordem-manutencao",
        pathMatch: "full"
      }
    ]
  },
  
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainOrderComponent]
})
export class MainOrderPageModule {}
