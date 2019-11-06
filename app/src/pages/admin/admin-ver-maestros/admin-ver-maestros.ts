import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the AdminVerMaestrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-ver-maestros',
  templateUrl: 'admin-ver-maestros.html',
})


export class AdminVerMaestrosPage {

  lista_maestros : any[] = [{
    idCatedratico : 1,
    Nombre: "Ing 1"
  },
  {
    idCatedratico : 2,
    Nombre: "Ing 2"
  }];

  constructor(public navCtrl: NavController , public navParams: NavParams,public http: HttpProvider,public alerCtrl: AlertController) {
    this.listar_maestros();
  }

  listar_maestros(){
    try{
      this.http.listar_maestros().then(
        (res) => {
          console.log("listar_maestros");
          this.lista_maestros = JSON.parse(JSON.stringify(res));
          console.log(this.lista_maestros);
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
    console.log('ionViewDidLoad AdminVerMaestrosPage');
  }

}
