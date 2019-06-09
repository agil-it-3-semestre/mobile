import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginProvider } from '../app/providers/login';
import { HttpProvider } from '../app/providers/http';
import { HttpModule } from '@angular/http';
import { Toasts } from './providers/toast';
import { LoginPageModule } from './login/login.module';
import { HomePageModule } from './home/home.module';
import { OrdemManutencaoPageModule } from './home/ordem-manutencao/ordem-manutencao.module';
import { NotificationPageModule } from './home/notification/notification.module';
import { OrdemProvider } from './providers/ordem-manutencao';
import { DetalhesPageModule } from '../app/component/ordem/detalhes/detalhes.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  entryComponents: [],

  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    HomePageModule,
    OrdemManutencaoPageModule,
    DetalhesPageModule,
    NotificationPageModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginProvider,
    OrdemProvider,
    Toasts,
    HttpProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
