import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NashiBot } from '../../services/NashiBot.service';


@Component({
    selector: 'speech-recognition-module',
    templateUrl: 'SpeechRecognitionPage.html'
})
export class SpeechRecognitionPage {
    private speekresult: string;
    constructor(public navCtrl: NavController, private bot: NashiBot) {

    }

    public sayHello(){
      this.bot.sayToBot((result: string): void =>{
        this.speekresult = result;
        this.bot.speek(result);
      })
    }

}
