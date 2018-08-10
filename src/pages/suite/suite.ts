import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {
  FormGroup,
  FormControl

} from '@angular/forms';


@Component({
  selector: 'page-suite',
  templateUrl: 'suite.html',
})
export class SuitePage {
  langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController ) {
   this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuitePage');
  }
  
 score(p1, p2) {
    var resultat = p1 + p2;
    if((p1 === 1 || p1 === 0) && (p2 === 1 || p2 === 0))
        return(resultat + ' pts');
    }
        
 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present()
  }
  
  
  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

}
