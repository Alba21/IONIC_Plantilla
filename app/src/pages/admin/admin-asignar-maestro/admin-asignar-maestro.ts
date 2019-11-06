import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';

/**
 * Generated class for the AdminAsignarMaestroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-asignar-maestro',
  templateUrl: 'admin-asignar-maestro.html',
})
export class AdminAsignarMaestroPage {

  myForm: FormGroup;  
  lista_catedraticos : any [];
  lista_cursos : any [];

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.listar_catedraticos();
    this.listar_cursos();
    this.myForm = this.createMyForm(); 
  }

  private createMyForm() {
    return this.formBuilder.group({
      catedratico: ['', Validators.required],
      curso: ['', Validators.required],
    });
  }  

  listar_catedraticos(){
    try{
      this.http.listar_maestros().then(
        (res) => {
          console.log("listar_maestros");
          this.lista_catedraticos = JSON.parse(JSON.stringify(res));
          console.log(this.lista_catedraticos);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }   
  }

  listar_cursos(){
    try{
      this.http.listar_cursos().then(
        (res) => {
          this.lista_cursos = JSON.parse(JSON.stringify(res));
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
  }

  asignar_catedratico(){
    let catedratico = String(this.myForm.value.catedratico);
    let curso =  String(this.myForm.value.curso);
    try{
      this.http.asignar_profesor( catedratico, curso).then(
        (res) => {
          
        },
        (error) =>{
          console.log(error);    
        }
      )  
    }catch(e){
      this.doAlert('Error','Intente mas Tarde');
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
    console.log('ionViewDidLoad AdminAsignarMaestroPage');
  }

}
