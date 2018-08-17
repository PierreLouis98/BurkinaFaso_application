import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormControl } from '@angular/forms';

import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})

export class ItemDetailsPage {
  selectedItem: any;
  
  actor;
  actor2;
  actor3;
  actor4;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    // we have an item available as a nav param
    
    this.selectedItem = navParams.get('item');
   

  }
  
showAlert(i) 
 {
     var r1 = this.actor;
     var r2 = this.actor2;
     var r3 = this.actor3;
     var r4 = this.actor4;
     var b_rep = this.selectedItem.reponse;
     var gagne;
    
     if (r1 === b_rep[0] && r2 === b_rep[1] && r3 === b_rep[2] && r4 === b_rep[3] )
        gagne = 'Gagné';
    else
        gagne = 'perdu';
        
        
        let alert = this.alerCtrl.create(
        {
          title: 'Score ',
          subTitle: gagne,
          buttons: ['OK']
        });
        
        alert.present();
  } 
  
  doSubmit(event) {

    event.preventDefault();
  }
} 


/** IDEE: FAIRE UN TABLEAU DE RESULTAT DANS ITEM */
/** IDEE: RAJOUTER, UNE FOIS LE NIVEAU FINI, UN BOUTON EN BAS DE L'ECRAN, PERMETTANT D'ALLER DIRECT VERS LE NV SUIVANT */























