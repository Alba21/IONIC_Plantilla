import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the EstudianteVerHorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estudiante-ver-horario',
  templateUrl: 'estudiante-ver-horario.html',
})
export class EstudianteVerHorarioPage {

  lista_horario: any[]; 

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
    this.listar_horario();
  }

  listar_horario(){
    try{
      this.http.listar_horario(1).then(
        (res) => {
          this.lista_horario = JSON.parse(JSON.stringify(res));
          console.log(this.listar_horario);
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
    console.log('ionViewDidLoad EstudianteVerHorarioPage');
  }

}
