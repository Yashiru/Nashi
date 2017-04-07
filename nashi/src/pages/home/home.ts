import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TextHelper } from '../../component/textHelper/textHelper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  private texts: String[] = [
    "I found X receipes",
    "Which recipe do you want to cook ?",
    "There is X possible recipes",
    "Chose your prefered recipe"
  ];
  private text: String = "s2wqdqde";

  private fontSize = "30pt";

  constructor(public navCtrl: NavController) {
  }

}
