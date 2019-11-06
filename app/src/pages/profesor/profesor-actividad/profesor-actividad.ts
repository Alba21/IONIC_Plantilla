import { Component } from '@angular/core'; 
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'; 
import { FormBuilder } from '@angular/forms'; 
import { HttpProvider } from '../../../providers/http/http';
import { ProfesorVerActividadesCursoPage } from '../profesor-ver-actividades-curso/profesor-ver-actividades-curso';
 
/** 
 * Generated class for the ProfesorActividadPage page. 
 * 
 * See https://ionicframework.com/docs/components/#navigation for more info on 
 * Ionic pages and navigation. 
 */ 
 
@IonicPage() 
@Component({ 
  selector: 'page-profesor-actividad', 
  templateUrl: 'profesor-actividad.html', 
}) 
export class ProfesorActividadPage { 
 
  lista_actividades: any[]; 
  lista_cursos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public formBuilder: FormBuilder, public http: HttpProvider) { 
   // this.listar_actividades(); 
    this.listar_cursos();
  } 
  listar_cursos(){
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
  this.navCtrl.push(ProfesorVerActividadesCursoPage, { item: item });
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
    console.log('ionViewDidLoad ProfesorActividadPage'); 
  } 
 
} 