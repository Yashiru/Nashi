import { TextToSpeech } from '@ionic-native/text-to-speech';
import {Injectable} from "@angular/core";
import { Platform } from 'ionic-angular';
import { WitAiService } from '../services/Wit-ai.service';
import {Ingredient} from "../models/Ingredient";

declare var SpeechRecognition: any;


@Injectable()
export class NashiBot {
  recognition: any;

  constructor(/*private tts: TextToSpeech, */platform: Platform, public wit: WitAiService){
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

  public speek(message: string): void{
    /*this.tts.speak(message)
      .then(() => console.log('Success').callback())
      .catch((reason: any) => console.log(reason));*/
  }

  public sayToBot(callbackToGetMessage: (msg: String) => void, callback: (isRecipe: Boolean, datas: any) => void): String{
    this.recognition.onresult = (event => {
      if (event.results.length > 0) {
        this.wit.sayToBot(event.results[0][0].transcript, callback);
        callbackToGetMessage(event.results[0][0].transcript);
      }
    });

    this.recognition.start();

    return "";
  }

  public sayToBotWithString(message: String, callback: (ingredients: Ingredient[]) => void){
    this.wit.sayToBot(message, callback);
  }

}
