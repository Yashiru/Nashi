import { TextToSpeech } from '@ionic-native/text-to-speech';
import {Injectable} from "@angular/core";
import { Platform } from 'ionic-angular';

declare var SpeechRecognition: any;

@Injectable()
export class NashiBot {
  recognition: any;

  constructor(private tts: TextToSpeech, platform: Platform){
    platform.ready().then(() => {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.onnomatch = (event => {
        console.log('No match found.');
      });
      this.recognition.onerror = (event => {
        console.log('Error happens.');
      });

    });
  }

  public speek(message: string): void{
    this.tts.speak(message)
      .then(() => console.log('Success')/*callback()*/)
      .catch((reason: any) => console.log(reason));
  }

  public sayToBot(callback: (event: string) => void): String{
    this.recognition.onresult = (event => {
      if (event.results.length > 0) {
        //TODO: send to wit service
        callback(event.results[0][0].transcript);
      }
    });

    this.recognition.start();

    return "";
  }
}
