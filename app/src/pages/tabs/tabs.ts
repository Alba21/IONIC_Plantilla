import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfesorListadoJuegosPage } from "../profesor/profesor-listado-juegos/profesor-listado-juegos";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfesorListadoJuegosPage;
  tab2Root = ProfesorListadoJuegosPage;
  tab3Root = ProfesorListadoJuegosPage;
  tab4Root = ProfesorListadoJuegosPage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
