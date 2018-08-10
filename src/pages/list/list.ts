import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage 
{
  icons: string[];
  titles: string[];
  notes: string[];
  questions: string[];
  items: Array<{title: string, note: string, icon: string, question}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
      {

      /** Tableau d'icon */
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        'american-football', 'boat', 'bluetooth', 'build'];

     /** Tableau de notes */
        this.notes = ['La préparation', 'La semence', 'Le semis', 'Le sarclage', 'Les engrais', 
        'Les traitements', 'La récolte', 'Le séchage', 'Le battage', 'Le tri', 'La conservation', 
        'Le stockage'];

      /** Tableau de titre */
        this.titles = ['Etape '];
        
      /** Tableau de question */
        this.questions = [
        'Le blé, où le moud-t-on ?',
        '14 +12 = ?',
        'Bonjour ?'
        ];

      /** Tableau d'item contenant le tableau d'icon, de note et de titre */
        this.items = [];


        for (var i = 0; i < 12; i++)
            this.items.push({ title: this.titles[0] + (i+1), note: this.notes[i] , icon: this.icons[4], question: this.questions[i] }); 

      }


        /**
         *  Le .push permet d'ouvrir la nouvelle page
         *  On passe en paramètre toutes les infos qui étaient déjà visible sur le bouton
         *  navCtrl pour naviguer. Plus d'infos sur : *https://ionicframework.com/docs/3.5.0/api/navigation/NavController/
         */
          itemTapped(event, item) {
            this.navCtrl.push(ItemDetailsPage, {item: item});
     }
}
































