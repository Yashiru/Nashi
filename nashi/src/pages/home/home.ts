import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CircleNashi } from '../../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../../component/textHelper/textHelper';
import { Recipes } from '../recipes/recipes';

declare var SpeechRecognition: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  
  // var for component circle
  private fontSize = "16pt";
  private text = "text";
  private animation = "animListen";

  // var for component speechRecognition
  _zone: any;
  recognition: any;
  list: any = [];

  constructor(public navCtrl: NavController, _zone: NgZone) {
    this._zone = _zone;
    this.navCtrl = navCtrl;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.onresult = (event => {
      if (event.results.length > 0) {          
        this._zone.run(() => this.list.push({result: event.results[0][0].transcript}));
      }
    });
    console.log('--> result: ', this.list);
  }

  ionViewDidLoad() {
    this.recognition.start();
  }

  goToRecipes() {
    this.navCtrl.push(Recipes);
  }
}
