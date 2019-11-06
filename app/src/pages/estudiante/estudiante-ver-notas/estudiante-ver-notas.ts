import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the EstudianteVerNotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estudiante-ver-notas',
  templateUrl: 'estudiante-ver-notas.html',
})
export class EstudianteVerNotasPage {

  lista_notas_estudiante: any[];

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
    this.listar_notas_estudiante();
  }

  listar_notas_estudiante(){
    try{
      this.http.listar_notas_estudiante(1).then(
        (res) => {
          this.lista_notas_estudiante = JSON.parse(JSON.stringify(res));
          console.log(this.lista_notas_estudiante);
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
    console.log('ionViewDidLoad EstudianteVerNotasPage');
  }

}
