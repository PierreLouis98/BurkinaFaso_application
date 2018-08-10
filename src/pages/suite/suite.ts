import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {
  FormGroup,
  FormControl

} from '@angular/forms';

/**
 * Generated class for the SuitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-suite',
  templateUrl: 'suite.html',
})
export class SuitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  
  
  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

}
