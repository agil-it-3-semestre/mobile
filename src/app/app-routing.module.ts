import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',    
    canActivate: [AuthGuard]
  },
  { 
    path: 'home/notification', 
    loadChildren: './home/notification/notification.module#NotificationPageModule' 
  },
  { 
    path: 'home/ordem-manutencao', 
    loadChildren: './home/ordem-manutencao/ordem-manutencao.module#OrdemManutencaoPageModule' 
  },
  { 
    path: 'details/:ordem',
    loadChildren: './component/ordem/details/details.module#DetailsPageModule' 
  },
  { 
    path: 'problems/:problema', 
    loadChildren: './component/ordem/problems/problems.module#ProblemsPageModule' 
  },
  { 
    path: 'details/:detalhe', 
    loadChildren: './component/ordem/details/details.module#DetailsPageModule' 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


}
