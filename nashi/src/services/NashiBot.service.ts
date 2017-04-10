import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Http, Headers, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class NashiBot {

  constructor(private tts: TextToSpeech){

  }

  public speek(message: string): void{
    this.tts.speak(message)
      .then(() => console.log('Success')/*callback()*/)
      .catch((reason: any) => console.log(reason));
  }

  public sayToBot(message: String, callback: (res:Response) => void): void{
    let url = "http://leo-fasano.com/nashi/web/wit&message="+message;


    let headers = new Headers({ });
    this.http.get(url, {headers: headers})
      .subscribe(
        function(response) { callback(response) }, //mapper le json dans un objet
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );
  }
}
