import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CircleNashi } from '../../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../../component/textHelper/textHelper';
import { Recipes } from '../recipes/recipes';
import { Recipe } from '../recipes/recipe';
import { About } from '../about/about';
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
  message: string;

  constructor(public navCtrl: NavController, _zone: NgZone, private bot: NashiBot, public yummly: Yummly, public platform: Platform) {
    this._zone = _zone;
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    let goToViewWithData = (View, datas) => {
      this.goToViewWithData(View, datas);
    };
    this.platform.ready().then(() => {
      this.bot.sayToBot(
        (msg: string): void => {
          this._zone.run(() => this.message = msg, this.animation = "animLoad" );
        },
        (isRecipe: Boolean, result: any): void => {
            if (isRecipe) {
                goToViewWithData(Recipe, result);
            } else {
                // res : recipes
                this.yummly.getRecipeFromIngrediant(result, (res: any) => {
                    goToViewWithData(Recipes, res);
                });
            }
        }
      );
    });
  }

  goToViewWithData(View, datas) {
    this.navCtrl.push(View, {
      datas: datas,
    });
  }

  goToView(View) {
    this.navCtrl.push(View);
  }
}
