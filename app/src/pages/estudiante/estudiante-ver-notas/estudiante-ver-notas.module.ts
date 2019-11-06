import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudianteVerNotasPage } from './estudiante-ver-notas';

@NgModule({
  declarations: [
    EstudianteVerNotasPage,
  ],
  imports: [
    IonicPageModule.forChild(EstudianteVerNotasPage),
  ],
})
export class EstudianteVerNotasPageModule {}
