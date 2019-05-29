import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class LoginProvider {
  

  constructor(private http : HttpProvider) {
      
  }

  public login(username, password : any){
    let json = {
      login: username,
      password : password
      }
      this.http.url = "http://localhost:3000/api/v1/login"
    return this.http.post(json)
  }
}
