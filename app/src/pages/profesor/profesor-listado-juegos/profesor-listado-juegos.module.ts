import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfesorListadoJuegosPage } from './profesor-listado-juegos';

@NgModule({
  declarations: [
    ProfesorListadoJuegosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfesorListadoJuegosPage),
  ],
})
export class ProfesorListadoJuegosPageModule {}
