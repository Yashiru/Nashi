import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var SpeechRecognition: any;

@Component({
    selector: 'speech-recognition-module',
    templateUrl: 'SpeechRecognitionPage.html'
})
export class SpeechRecognitionPage {
    showSearchButton: boolean;
    speechData: string;
    recognition: any;
    started: String = "";
    speekResult: String = "";

    constructor(public navCtrl: NavController) {
        this.showSearchButton = true;
        this.speechData = "";

        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'fr-FR';
        this.recognition.onnomatch = (event => {
            console.log('No match found.');
        });
        this.recognition.onerror = (event => {
            console.log('Error happens.');
        });
        this.recognition.onresult = (event => {
            if (event.results.length > 0) {
              this.displayResult(event.results[0][0].transcript);
            }
        });

        this.recognition.start();
    }

    public recognise(): void{
      this.recognition.start();
    }

    public displayResult(result: String): void{
      this.speekResult = result;
    //  this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }


}
