import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  langs;
 
  question;
  question2;
  question3;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // we have an item available as a nav param
    
    this.selectedItem = navParams.get('item');
    
        this.question = new FormGroup({
      "langs": new FormControl()
      })  
              this.question2 = new FormGroup({
      "langs": new FormControl()
      })  
              this.question3 = new FormGroup({
      "langs": new FormControl()
      })  
  }
  
  doSubmit(event) {
    console.log('Submitting form', this.question.value);
    console.log('Submitting form', this.question2.value);
    console.log('Submitting form', this.question3.value);
    event.preventDefault();
  }
}

/** IDEE: FAIRE UN TABLEAU DE RESULTAT DANS ITEM */