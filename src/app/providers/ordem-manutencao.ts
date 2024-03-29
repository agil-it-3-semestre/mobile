import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class OrdemProvider {
  

  constructor(private http : HttpProvider) {
      
  }

  public getOrdens(){
    this.http.url = "http://localhost:3000/api/v1/maintenance-orders"
    return this.http.get()
  }

  public getOrdemManutencao(id : any){
    this.http.url = "http://localhost:3000/api/v1/maintenance-orders/" + id
    return this.http.get()
  }

  public getOperacaoProblema(id : any){
    this.http.url = "http://localhost:3000/api/v1/operations/" + id
    return this.http.get()
  }

  public postAssinatura(idOrdem, idUser : any){
    this.http.url = "http://localhost:3000/api/v1/maintenance-orders/" + idOrdem + "/assign"
    return this.http.post(
      {
        userId : idUser
      }
    )
  }
}
