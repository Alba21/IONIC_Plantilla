import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudianteVerHorarioPage } from './estudiante-ver-horario';

@NgModule({
  declarations: [
    EstudianteVerHorarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EstudianteVerHorarioPage),
  ],
})
export class EstudianteVerHorarioPageModule {}
