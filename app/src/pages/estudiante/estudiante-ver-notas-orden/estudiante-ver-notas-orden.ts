import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the EstudianteVerNotasOrdenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estudiante-ver-notas-orden',
  templateUrl: 'estudiante-ver-notas-orden.html',
})
export class EstudianteVerNotasOrdenPage {

  lista_notas_desc : any[];

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
    this.listar_notas_Desc();
  }

  listar_notas_Desc(){
    try{
      this.http.listar_notas_desc(1).then(
        (res) => {
          this.lista_notas_desc = JSON.parse(JSON.stringify(res));
          console.log(this.lista_notas_desc);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
  }

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstudianteVerNotasOrdenPage');
  }

}
