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
  listaSpesa: any = [];

  constructor(public navCtrl: NavController, _zone: NgZone) {
    this._zone = _zone;
    this.navCtrl = navCtrl;

    // this.recognition = new SpeechRecognition();
    // this.recognition.lang = 'fr-FR';
    // this.recognition.onresult = (event => {
    //   if (event.results.length > 0) {          
    //     console.log('--> risultati: ', event.results[0][0].transcript);
    //     this._zone.run(() => this.listaSpesa.push({alimento: event.results[0][0].transcript}));
    //   }
    // });
  }

  ionViewDidLoad() {
    // this.recognition.start();
  }

  goToRecipes() {
    this.navCtrl.push(Recipes);
  }
}
