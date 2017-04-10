import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CircleNashi } from '../../component/circleNashiBot/circle-nashi';

import { TextHelper } from '../../component/textHelper/textHelper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  
  private fontSize = "16pt";
  private text = "text";
  private animation = "animListen";

  constructor(public navCtrl: NavController) {
  }

}
