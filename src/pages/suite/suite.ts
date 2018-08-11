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
  langs2;
  question;
  question2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController ) {
  
    this.question = new FormGroup({
      "langs": new FormControl({value: '5', disabled: false})
      })
      this.question2 = new FormGroup({
      "langs2": new FormControl({value: '5', disabled: false})
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuitePage');
  }
  
  message_audio() {
    src="assets/audio/calcul.mp3" 
    type="audio/mpeg"
  }

        
 showAlert() 
 {
     var resul1 = Number(this.actor);
     var resul2 = Number(this.actor2);
     var resul = resul1 + resul2;
     
     if (resul1 === 9 && resul2 === -9)
        resul = Number(2) + 'pts';
    else if ((resul1 === 9 && resul2 !== -9) || (resul1 !== 9 && resul2 === -9))
        resul = Number(1) + 'pt';
    else
        resul = Number(0) + 'pt';
        
        let alert = this.alerCtrl.create(
        {
          title: resul,
          buttons: ['OK']
        });
        
        alert.present()
  }
  

  
  doSubmit(event) {
    console.log('Submitting form', this.question.value);
    console.log('Submitting form', this.question2.value);
    event.preventDefault();
  }

}


