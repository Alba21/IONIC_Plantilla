import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TabsProfesorPage } from "../TabsProfesor/TabsProfesorPage";
import { tabsEstudiantePage } from "../tabsEstudiante/tabsEstudiante";
import { tabsPadrePage } from "../tabsPadre/tabsPadre";
import { tabsAdminPage } from "../tabsAdmin/tabsAdmin";



@Component({
  selector: 'page-usuario-registro',
  templateUrl: 'usuario-registro.html',
})
export class UsuarioRegistroPage {

  myForm: FormGroup;
  myFormLogin: FormGroup;  
  usuarios : any[];
  

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) {
    this.myForm = this.createMyForm();
    this.myFormLogin = this.createMyFormLogin();
  }

  private createMyForm() {
    return this.formBuilder.group({
      usuario_nombre: ['', Validators.required],
      usuario_apellido: ['', Validators.required],
      usuario_contrasena: ['', Validators.required],
      tipo_usuario :['']
    });
  }

  private createMyFormLogin() {
    return this.formBuilder.group({
      usuario_nombre: ['', Validators.required],
      usuario_contrasena: ['', Validators.required]
    });
  }

  doAlert(titulo: String, mensaje:String) {
    let alert = this.alerCtrl.create({
      title: String(titulo),
      message: String(mensaje),
      buttons: ['Ok']
    });
    alert.present()
  }


  public UsuarioCrear() {
    console.log("----VALORES RECIBIDOS----");
    console.log(this.myForm.value.usuario_nombre);
    console.log(this.myForm.value.usuario_apellido);
    console.log(this.myForm.value.usuario_contrasena);
    console.log("-------------------------");
    try{
      this.http.metodo_usuario_crear( String(this.myForm.value.usuario_nombre),String(this.myForm.value.usuario_apellido),String(this.myForm.value.usuario_contrasena)).then(
        (res) => {
          console.log(res);
          this.doAlert('Registrado','Se ha registrado exitosamente, Puede acceder Por medio del Login');
        },
        (error) =>{
          console.log('Error');
          this.doAlert('Error','No Se ha registrado, intente mas tarde');          
        }
      )  
    }catch(e){
      this.doAlert('Error','No Se ha registrado, intente mas tarde');
    }
  }

  usuarioLogin() { 

    let correo = String(this.myFormLogin.value.usuario_nombre);
    let password =  String(this.myFormLogin.value.usuario_contrasena);
    // Estudiante
    if(password === "estudiante"){
      this.navCtrl.setRoot(tabsEstudiantePage,{usuario_id:correo})
    // profesor
    }else if(password === "profesor"){
      this.navCtrl.setRoot(TabsProfesorPage,{usuario_id:correo});
    // Padre
    }else if(password === "padre"){
      this.navCtrl.setRoot(tabsPadrePage,{usuario_id:correo});
    // Admin
    }else if(password === "admin"){
      this.navCtrl.setRoot(tabsAdminPage,{usuario_id:correo});
    }else{
      
    }

/*
    try{
      this.http.metodo_login( correo,password).then(
        (res) => {
          console.log(res['result']);
          console.log(res['usuario_id']);  
          let usuario_id = String(res['usuario_id']);        
          if(res['result'] =='logueado'){
            this.doAlert('Bienvenido','Datos correctos');
            this.navCtrl.setRoot(TabsPage,{usuario_id:usuario_id});
          }else{
            this.doAlert('Error','Datos incorrectos');
          }
        },
        (error) =>{
          console.log('Error');    
        }
      )  
    }catch(e){
      this.doAlert('Error','Intente mas Tarde');
    }  
    */  
  }
  

}


