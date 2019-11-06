import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfesorPlanificacionPage } from "../profesor/profesor-planificacion/profesor-planificacion";
import { EstudianteVerHorarioPage } from '../estudiante/estudiante-ver-horario/estudiante-ver-horario';
import { EstudianteVerNotasPage } from '../estudiante/estudiante-ver-notas/estudiante-ver-notas';
import { EstudianteVerNotasOrdenPage } from '../estudiante/estudiante-ver-notas-orden/estudiante-ver-notas-orden';
import { EstudianteVerJuegoPage } from '../estudiante/estudiante-ver-juego/estudiante-ver-juego';


@Component({
  templateUrl: 'tabs.html'
})
export class tabsEstudiantePage {

  tab1Root = EstudianteVerHorarioPage;
  tab2Root = EstudianteVerNotasPage;
  tab3Root = EstudianteVerJuegoPage;
  tab4Root = EstudianteVerNotasOrdenPage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
