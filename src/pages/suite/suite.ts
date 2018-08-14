import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'page-suite',
  templateUrl: 'suite.html',
})
export class SuitePage {

  actor;
  actor2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController ) {
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuitePage');
  }
  

        
 showAlert() 
 {
     var resul1 = Number(this.actor);
     var resul2 = Number(this.actor2);
     var resul;
     
     if (resul1 === 9 && resul2 === -9)
        resul = 'Gagné !';
    else
        resul = 'Perdu !';
        
        let alert = this.alerCtrl.create(
        {
          title: resul,
          buttons: ['OK']
        });
        
        alert.present()
  }
  



}


