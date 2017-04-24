import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//pages
import { SpeechRecognitionPage  } from '../pages/ServiceSpeechRecognition/SpeechRecognitionPage'
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { Home  } from '../pages/Home/Home'
//services
import { Yummly } from '../services/Yummly.service';
import { NashiBot } from '../services/NashiBot.service';

import { WitAiService } from '../services/Wit-ai.service';
import { Ingrediant } from '../models/Ingrediant';
import { WitIngrediant } from '../models/factory/WitIngrediant';

@NgModule({
  declarations: [
    MyApp,
    SpeechRecognitionPage,
    Home,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeechRecognitionPage,
    Home

  ],
  providers:
  [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NashiBot,
    TextToSpeech,
    Yummly,
    WitAiService,
    Ingrediant,
    WitIngrediant

  ],
})
export class AppModule {}
