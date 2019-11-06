import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpProvider } from "../../../providers/http/http";

/**
 * Generated class for the ProfesorVerAgregarNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor-ver-agregar-nota',
  templateUrl: 'profesor-ver-agregar-nota.html',
})
export class ProfesorVerAgregarNotaPage {

  myForm: FormGroup;  
  lista_estudiante: any[];
  lista_cursos:any[];

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.listar_estudiantes();
    this.listar_cursos();    
    this.myForm = this.createMyForm();        
  }

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
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

  listar_estudiantes(){
    try{
      this.http.listar_estudiantes().then(
        (res) => {
          this.lista_estudiante = JSON.parse(JSON.stringify(res));
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){
      this.doAlert('Error','No se puede cargar intenta mas tarde');
    }
  }


  private createMyForm() {
    return this.formBuilder.group({
      alumno: ['', Validators.required],
      curso: ['', Validators.required],      
      nota: ['', Validators.required],
    });
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorVerAgregarNotaPage');
  }


  agregar_nota() { 

    let alumno = String(this.myForm.value.alumno);
    let curso =  String(this.myForm.value.curso);
    let nota = String(this.myForm.value.nota);


    try{
      this.http.agregar_nota( alumno, curso, nota).then(
        (res) => {
          console.log(res['result']);
          console.log(res['usuario_id']);  
          let usuario_id = String(res['usuario_id']);        
          if(res['result'] =='logueado'){
            this.doAlert('Bienvenido','Datos correctos');
            
          }else{
            this.doAlert('Error','Datos incorrectos');
          }
        },
        (error) =>{
          console.log(error);    
        }
      )  
    }catch(e){
      this.doAlert('Error','Intente mas Tarde');
    }    
  }


}
