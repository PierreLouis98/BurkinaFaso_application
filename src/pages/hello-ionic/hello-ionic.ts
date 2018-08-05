import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {
  }
  
  gotoContact(event){
        this.navCtrl.push(ContactPage);
    }

}
