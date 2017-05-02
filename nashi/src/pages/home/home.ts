import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CircleNashi } from '../../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../../component/textHelper/textHelper';
import { Recipes } from '../recipes/recipes';
import { NashiBot } from '../../services/NashiBot.service';
import { Ingredient } from "../../models/Ingredient";
import { Yummly } from "../../services/Yummly.service";
import { Platform } from 'ionic-angular';


declare var SpeechRecognition: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  
  // var for component circle
  private fontSize = "16pt";
  private text = "";
  private texts = [
    "Hello",
    "What do you want",
    "to eat ?",
  ];
  private animation = "animListen";

  // var for component speechRecognition
  _zone: any;
  speekresult: string;
  message: string;

  constructor(public navCtrl: NavController, _zone: NgZone, private bot: NashiBot, public yummly: Yummly, public platform: Platform) {
    this._zone = _zone;
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.bot.sayToBot(
        (msg: string): void => {
          this._zone.run(() => this.message = msg, this.animation = "animLoad" );
        },
        (result: Ingredient[]): void => {
          this.yummly.getRecipeFromIngrediant(result, (res: any) => {
            this.speekresult = res;
          });
        }
      );
    });
  }

  goToRecipes() {
    this.navCtrl.push(Recipes);
  }
}
