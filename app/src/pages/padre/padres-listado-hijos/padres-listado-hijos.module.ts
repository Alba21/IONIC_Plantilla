import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PadresListadoHijosPage } from './padres-listado-hijos';

@NgModule({
  declarations: [
    PadresListadoHijosPage,
  ],
  imports: [
    IonicPageModule.forChild(PadresListadoHijosPage),
  ],
})
export class PadresListadoHijosPageModule {}
