import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder } from '../../../../node_modules/@angular/forms';
import { HttpProvider } from '../../../providers/http/http';
import { EstudianteVerHorarioPage } from '../../estudiante/estudiante-ver-horario/estudiante-ver-horario';

/**
 * Generated class for the PadreVerHorarioHijoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-padre-ver-horario-hijo',
  templateUrl: 'padre-ver-horario-hijo.html',
})
export class PadreVerHorarioHijoPage {

  lista_hijos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.listar_hijos();
  }

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  } 

 listar_hijos(){
    try{
      this.http.listar_hijos(1).then(
        (res) => {
          console.log("listar_hijos");
          this.lista_hijos = JSON.parse(JSON.stringify(res));
          console.log(this.lista_hijos);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
 }

 DetalleHijo(item){
  this.navCtrl.push(EstudianteVerHorarioPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadreVerHorarioHijoPage');
  }

}
