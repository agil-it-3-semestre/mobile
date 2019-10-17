import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import { LoginProvider } from '../providers/login';
import { Toasts } from '../providers/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  private email : string = "jose@senai.com.br";
  private senha : string = "jose123";

  constructor(private router: Router, private loginProvider : LoginProvider, private toast : Toasts) {
   }

  login(){
    // this.loginProvider.login(this.email, this.senha).subscribe(
    //   (data : any) => {
        // let user = JSON.parse(data._body);
        // window.localStorage.setItem("userId", user.id)
        this.router.navigateByUrl('/home')
    //   },
    //   (error : any) =>{
    //     this.toast.toastLoginShow('Senha incorreta', 2000);
    //   }
    // )
  }

}
