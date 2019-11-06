import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesorVerNotasCursoPage } from "../profesor-ver-notas-curso/profesor-ver-notas-curso";
import { HttpProvider } from "../../../providers/http/http";
/**
 * Generated class for the ProfesorVerNotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-ver-notas',
  templateUrl: 'profesor-ver-notas.html',
})
export class ProfesorVerNotasPage {

  lista_cursos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
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




 listar_notas(){
    try{
      this.http.listar_cursos().then(
        (res) => {
          console.log("listar_notas");
          this.lista_cursos = JSON.parse(JSON.stringify(res));
          console.log(this.lista_cursos);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
 }

 DetalleCurso(item){
    this.navCtrl.push(ProfesorVerNotasCursoPage, { item: item });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorVerNotasPage');
  }

}
