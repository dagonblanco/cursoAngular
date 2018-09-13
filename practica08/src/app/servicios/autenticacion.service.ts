import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  user:any;
  
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
