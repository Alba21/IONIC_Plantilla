import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { PadresListadoHijosPage } from "../padre/padres-listado-hijos/padres-listado-hijos";
import { PadreVerMensajesPage } from "../padre/padre-ver-mensajes/padre-ver-mensajes";
import { PadresVerNotasHijosPage } from "../padre/padres-ver-notas-hijos/padres-ver-notas-hijos";
import { PadreVerHorarioHijoPage } from '../padre/padre-ver-horario-hijo/padre-ver-horario-hijo';


@Component({
  templateUrl: 'tabs.html'
})
export class tabsPadrePage {

  tab1Root = PadresListadoHijosPage;
  tab2Root = PadreVerMensajesPage;
  tab3Root = PadresVerNotasHijosPage;
  tab4Root = PadreVerHorarioHijoPage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
