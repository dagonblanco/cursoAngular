import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AutenticacionService } from './servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(private authSrv:AutenticacionService, private router: Router){}

  canActivate(): boolean {        
    if (this.authSrv.getAdmin()) {
      return true;
    } else {
      this.router.navigate(['/sin-autorizacion']);
      return false;
    }
  }
}
