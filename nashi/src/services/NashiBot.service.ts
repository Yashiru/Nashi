import { TextToSpeech } from 'ionic-native';
import {Injectable} from "@angular/core";
import { Platform } from 'ionic-angular';
import { WitAiService } from '../services/Wit-ai.service';
import {Ingredient} from "../models/Ingredient";

declare var SpeechRecognition: any;

@Injectable()
export class NashiBot {
  recognition: any;

  constructor(platform: Platform, public wit: WitAiService){
    platform.ready().then(() => {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'fr-FR';
      this.recognition.onnomatch = (event => {
        console.log('No match found.');
      });
      this.recognition.onerror = (event => {
        console.log('Error happens.');
      });
    });
  }

  public speek(message: string, callback?: () => void): void{
    TextToSpeech.speak({
      text: message,
      locale: 'fr-FR',
      rate: 1.15
    })
      .then(() => {
      console.log('Success')
      if(callback)
      {
        callback();
      }
    })
      .catch((reason: any) => console.log(reason));
  }

  public sayToBot(callbackStratListening: () => void, callbackToGetMessage: (msg: String) => void, callback: (isRecipe: Boolean, datas: any, isTimer:boolean) => void): String{
    this.recognition.onresult = (event => {
      if (event.results.length > 0) {
        this.wit.sayToBot(event.results[0][0].transcript, callback);
        callbackToGetMessage(event.results[0][0].transcript);
      }
    });

    this.recognition.start();
    callbackStratListening();

    /*this.wit.sayToBot("je veux cuixiner une tartiflette", callback);
    callbackToGetMessage("je veux cuixiner une tartiflette");
    callbackStratListening();*/

    return "";
  }

  public sayToBotWithString(message: String, callback: (ingredients: Ingredient[]) => void){
    this.wit.sayToBot(message, callback);
  }

}
