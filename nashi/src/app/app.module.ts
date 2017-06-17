import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SpeechRecognitionPage  } from '../pages/ServiceSpeechRecognition/SpeechRecognitionPage'
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Home } from "../pages/Home/Home";
import { NashiBot } from '../services/NashiBot.service';
import { WeCook } from "../services/WeCook.service";

@NgModule({
  declarations: [
    MyApp,
    Home,
    SpeechRecognitionPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    SpeechRecognitionPage,

  ],
  providers:
  [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NashiBot,
    TextToSpeech,
    WeCook,
  ]
})
export class AppModule {}
