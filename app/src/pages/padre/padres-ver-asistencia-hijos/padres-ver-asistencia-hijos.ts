import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PadresVerAsistenciaHijosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-padres-ver-asistencia-hijos',
  templateUrl: 'padres-ver-asistencia-hijos.html',
})
export class PadresVerAsistenciaHijosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadresVerAsistenciaHijosPage');
  }

}
