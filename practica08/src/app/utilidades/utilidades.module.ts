import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaSuaveDirective } from './carga-suave.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CargaSuaveDirective],
  exports: [CargaSuaveDirective]
})
export class UtilidadesModule { }
