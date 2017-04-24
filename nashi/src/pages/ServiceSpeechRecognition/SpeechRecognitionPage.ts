import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NashiBot } from '../../services/NashiBot.service';
import {Ingredient} from "../../models/Ingredient";
import {Yummly} from "../../services/Yummly.service";


@Component({
    selector: 'speech-recognition-module',
    templateUrl: 'SpeechRecognitionPage.html'
})
export class SpeechRecognitionPage {
    private speekresult: string;
    constructor(public navCtrl: NavController, private bot: NashiBot, public yummly: Yummly) {

    }

    public sayHello(){
      this.bot.sayToBot((result: Ingredient[]): void =>{
        this.yummly.getRecipeFromIngrediant(result, (res) => {
          this.speekresult = res.toString();
        });
      })
    }

}
