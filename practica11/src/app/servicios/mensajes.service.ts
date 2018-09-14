import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private mensajero = new Subject<string>();

  constructor() { }

  enviarMensaje(texto:string){
    this.mensajero.next(texto);
  }

  getMensajero(): Observable<any>{
    return this.mensajero.asObservable();
  }
}
