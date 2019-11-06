import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfesorCrearJuegoPage } from "../profesor/profesor-crear-juego/profesor-crear-juego";
import { AdminVerMaestrosPage } from '../admin/admin-ver-maestros/admin-ver-maestros';
import { AdminAsignarMaestroPage } from '../admin/admin-asignar-maestro/admin-asignar-maestro';


@Component({
  templateUrl: 'tabs.html'
})
export class tabsAdminPage {

  tab1Root = AdminVerMaestrosPage;
  tab2Root = AdminAsignarMaestroPage;
  tab3Root = ProfesorCrearJuegoPage;
  tab4Root = ProfesorCrearJuegoPage;

  public tabsparams: String;
  
  constructor( public navParams: NavParams) {
     console.log(String(this.navParams.get('usuario_id')));    
     this.tabsparams = String(this.navParams.get('usuario_id'));
  }
}
