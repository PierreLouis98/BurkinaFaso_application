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
  questions: string[][][];
  index: string[];
  reponses: string[][];

  
  
  items: Array<{ reponse: string[], ind: string, title: string, note: string, icon: string, question: string[][] }>;




  constructor(public navCtrl: NavController, public navParams: NavParams) 
      {

/** TABLEAU A UNE DIMENSION */
      /** Tableau d'icon */
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        'american-football', 'boat', 'bluetooth', 'build'];

     /** Tableau de notes */
        this.notes = ['La préparation', 'La semence', 'Le semis', 'Le sarclage', 'Les engrais', 
        'Les traitements', 'La récolte', 'Le séchage', 'Le battage', 'Le tri', 'La conservation', 
        'Le stockage'];

      /** Tableau de titres */
        this.titles = ['Etape '];
        
      /** Index */
        this.index = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        
      /** Reponses */
        this.reponses = [['1','1','4','1'],['4','1','1','2','4','3','1']];
 
        
        
  
     this.questions = [[['1. Quels sols pour le niébé pluvial ? ','A. Les sols sableux-limoneux bien drainés conviennent au niébé','B.  On peut cultiver le niébé dans les  bas fond','C. Le niébé tolère les sols trop humides ','D. Toutes les réponses précédentes sont vraies'], ['2.Dans quelles conditions fait-on le labour ?', 'A. après une bonne pluie et la profondeur devrait atteindre 20 cm', 'B. A tout moment ', 'C. après une bonne pluie et la profondeur devrait atteindre 70 mm ', 'D. Toutes les reponses sont fausses '], ['3.Quel est l’utilité du labour ? ', 'A. labourer et herser le champs permet de stimuler la croissance des racines ', 'B. labourer permet d’améliorer les rendements ', 'C. le labour est facultatif et n’a aucune incidence sur le rendement ', 'D. les reponses a et bsont vraies '], ['4. Quelle quantité de fumure organique pour un ha de niébé ? ', 'A. Pour 1 ha de culture du niébé, il faudrait en moyenne 1 à 5 tonnes de fumure organique ', 'B. Pour un ha il faudrait en moyenne 6 à 10 tonnes de fumure organique', 'C. Pour un hectare de production, il faudrait pus de 10 tonnes de fumure organique', 'D. Aucune des réponses précédentes n’est vraie ']  ],
                            [['1. Quelle quantité de semences pour 1 ha de niébé en culture pure ?','A. 3 kg de semences', 'B. 40 kg de semences','C. 60 kg de semences','D. 12  à 25 kg de semences'], ['2. Quels critères tient-on compte dans le choix de la variété','a. Le choix de la variété doit tenir compte de la durée du cycle cultural, du potentiel de rendement et des contraintes biotiques et abiotiques de la zone de production','b. Le choix de la variété doit tenir exclusivement compte de son accessibilité (prix,disponibilité…)','c. Le choix de la variété doit tenir uniquement compte des opportunités de revente du niébé','d. Toutes les reponses sont vraies'], ['3. question :parmi les variétes de niébé suivantes, laquelle possède le cycle de production le plus court','A. IT 98 K-205-8','B. IT 90 K-372-1-2','C. KVX-30-309-6G','D.IT99 K-573-1-1'], ['4. Parmi les variétés suivantes laquelle est  semi-rampante ?','A. IT 98 K-205-8','B.IT99 K-573-1-1','c. IT 97 K-499-38','D. IT 97 K-499-35'],  ['5. Question : laquelle de ces variétés possède le meilleur  rendement ?', 'a. IT99 K-573-1-1', 'b. IT 98 K-205-8', 'c. IT96D-610-', 'd.  IT 97 K-499-38'], ['6. Laquelle de ces variétés tolère mieux la sécheresse', 'A. IT99 K-573-1-1 ', 'B. IT 98 K-205-8 ', 'C. IT96D-610- ', 'D. IT 97 K-499-38 '], [ 'Quel traitement des semences avant le semi ?', 'a) Il faut traiter la semence avec le calthio contre les insectes et les maladies avant de semer', 'b) Il n’est pas necessaire de faire un traitement des semences avant le semis', 'c) Il faudrait traiter les semences avec le decis avant les semis ', 'd) Toutes les reponses précédemment proposées sont vraies' ]],
                        ];
                        
/** TABLEAU A DEUX DIMENSIONS */
        
      /** Tableau d'item contenant le tableau d'icon, de note et de titre */
        this.items = [];
        for (var i = 0; i < 2; i++)
            this.items.push({ reponse: this.reponses[i], ind: this.index[i], title: this.titles[0] + (i+1), note: this.notes[i] , icon: this.icons[4], question: this.questions[i]  }); 

      


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

































