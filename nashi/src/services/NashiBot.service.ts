import { TextToSpeech } from '@ionic-native/text-to-speech';
import {Injectable} from "@angular/core";

@Injectable()
export class NashiBot {

  constructor(/*private tts: TextToSpeech*/){

  }

  public speek(message: string, callback?: (() => void)): void{
    /*this.tts.speak(message)
      .then(() => console.log('Success')/*callback())
      .catch((reason: any) => console.log(reason));*/
  }

  public sayToBot(message: String): String{

    return "";
  }
}
