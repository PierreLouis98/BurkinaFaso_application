import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'page-suite',
  templateUrl: 'suite.html',
})
export class SuitePage {
  langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController ) {
  
    this.langForm = new FormGroup({
      "langs": new FormControl({value: '5', disabled: false}, {value: '8', disabled: false}, {value: '9', disabled: false}, {value: '40 672', disabled: false})
                                  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuitePage');
  }
  

        
 showAlert() {
 var resul = this.actor;
if(resul === '9')
        resul = '1 pt';
    else
        resul = '0 pt';
    let alert = this.alerCtrl.create({
      title: resul,
      buttons: ['OK']
    });
    alert.present()
  }
  

  
  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

}


