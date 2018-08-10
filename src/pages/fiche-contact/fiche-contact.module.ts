import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheContactPage } from './fiche-contact';

@NgModule({
  declarations: [
    FicheContactPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheContactPage),
  ],
})
export class FicheContactPageModule {}
