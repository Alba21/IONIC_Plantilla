import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the ProfesorVerActividadesCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-ver-actividades-curso',
  templateUrl: 'profesor-ver-actividades-curso.html',
})
export class ProfesorVerActividadesCursoPage {
  identificador_curso:any;
  lista_actividades: any[];  

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
    console.log('Passed params id_curso', navParams.data['item']);
    this.identificador_curso = navParams.data['item'];
    this.listar_actividades();
  }
  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }  
  listar_actividades(){
    try{
      this.http.listar_actividades(this.identificador_curso.idCurso).then(
        (res) => {
          this.lista_actividades = JSON.parse(JSON.stringify(res));
          console.log(this.lista_actividades);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
 }  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorVerActividadesCursoPage');
  }

}
