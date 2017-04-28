import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NashiBot } from '../../services/NashiBot.service';

declare var SpeechRecognition: any;

@Component({
    selector: 'speech-recognition-module',
    templateUrl: 'SpeechRecognitionPage.html'
})
export class SpeechRecognitionPage {

    constructor(public navCtrl: NavController, private bot: NashiBot) {

    }

    public sayHello(){
      this.bot.speek("Hi, i'm the nashi's bot, you can call me Nashi");
    }

}
