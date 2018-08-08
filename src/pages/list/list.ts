import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;


/**
*   
*
*/
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
  
  /** Tableau d'icon */
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

  /** 
  * Tableau d'item (ensemble des informations sur un bouton)
  */
    this.items = [];

     
     
     this.items.push({ title: 'Etape ' + 1, note: 'La préparation' });
     this.items.push({ title: 'Etape ' + 2, note: 'La semence' });
     this.items.push({ title: 'Etape ' + 3, note: 'Le semis' });
     this.items.push({ title: 'Etape ' + 4, note: 'Le sarclage' });
     this.items.push({ title: 'Etape ' + 5, note: 'Les engrais' });
     this.items.push({ title: 'Etape ' + 6, note: 'Les traitements' });
     this.items.push({ title: 'Etape ' + 7, note: 'La récolte'  });
     this.items.push({ title: 'Etape ' + 8, note: 'Le séchage' });
     this.items.push({ title: 'Etape ' + 9, note: 'Le battage' });
     this.items.push({ title: 'Etape ' + 10, note: 'Le tri' });
     this.items.push({ title: 'Etape ' + 11, note: 'La conservation' });
     this.items.push({ title: 'Etape ' + 12, note: 'Le stockage' });
     
     /**   this.items.push({ title: 'Etape ' + 3, note: 'Le semis', icon: this.icons[Math.floor(Math.random() * this.icons.length)] }); 
     */
  }





/**
 *  Le .push permet d'ouvrir la nouvelle page
 *  On passe en paramètre le logo qui est déjà visible sur le bouton
 *  navCtrl pour naviguer. Plus d'infos sur : *https://ionicframework.com/docs/3.5.0/api/navigation/NavController/
 */
 
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {item: item});
  }
}
