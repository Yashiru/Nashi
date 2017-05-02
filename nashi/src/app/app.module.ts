import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SpeechRecognitionPage  } from '../pages/ServiceSpeechRecognition/SpeechRecognitionPage'
import { Home  } from '../pages/home/home'
import { Recipes  } from '../pages/recipes/recipes'
import { About  } from '../pages/about/about'
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { CircleNashi } from '../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../component/textHelper/textHelper';

import { NashiBot } from '../services/NashiBot.service';

@NgModule({
  declarations: [
    MyApp,
    SpeechRecognitionPage,

    // Pages
    Home,
    Recipes,
    About,

    // Components
    CircleNashi,
    TextHelper
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeechRecognitionPage,

    // Pages
    Home,
    Recipes,
    About,

    // Components
    CircleNashi,
    TextHelper
  ],
  providers:
  [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NashiBot,
    TextToSpeech
  ]
})
export class AppModule {}
