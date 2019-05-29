import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import { LoginProvider } from '../providers/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  private usuario : any = 'Marcio';
  private senha : any = '123456';

  constructor(private menuCtrl : MenuController, private router: Router, private loginProvider : LoginProvider) {
   }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  redirect(){
    this.router.navigateByUrl('/home')
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true);
  }

  metodoGet(){
    this.loginProvider.login(this.usuario, this.senha).subscribe(
      (data : any) => {
        console.log(data);
      },
      (error : any) =>{
        console.log(error);
      }
    )

  }

}
