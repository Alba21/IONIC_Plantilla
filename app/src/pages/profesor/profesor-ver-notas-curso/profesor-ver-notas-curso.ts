import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from "../../../providers/http/http";
import { ProfesorVerAgregarNotaPage } from "../profesor-ver-agregar-nota/profesor-ver-agregar-nota";


/**
 * Generated class for the ProfesorVerNotasCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-ver-notas-curso',
  templateUrl: 'profesor-ver-notas-curso.html',
})
export class ProfesorVerNotasCursoPage {

  identificador_curso:any;
  lista_notas: any[];  

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
     console.log('Passed params id_usuario', navParams.data['item']);
     this.identificador_curso = navParams.data['item'];
     this.listar_notas();
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
    console.log('ionViewDidLoad ProfesorVerNotasCursoPage');
  }

 listar_notas(){
    try{
      this.http.listar_notas(this.identificador_curso.idCurso).then(
        (res) => {
          this.lista_notas = JSON.parse(JSON.stringify(res));
          console.log(this.lista_notas);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
 }  


 nueva_nota(){
    this.navCtrl.push(ProfesorVerAgregarNotaPage);
 }


}
