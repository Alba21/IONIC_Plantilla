import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminVerEstudiantesPage } from './admin-ver-estudiantes';

@NgModule({
  declarations: [
    AdminVerEstudiantesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminVerEstudiantesPage),
  ],
})
export class AdminVerEstudiantesPageModule {}
