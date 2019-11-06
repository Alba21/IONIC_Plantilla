import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfesorPlanificacionPage } from './profesor-planificacion';

@NgModule({
  declarations: [
    ProfesorPlanificacionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfesorPlanificacionPage),
  ],
})
export class ProfesorPlanificacionPageModule {}
