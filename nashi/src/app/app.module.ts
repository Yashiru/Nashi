import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WitAiService } from '../services/Wit-ai.service';
import { Ingrediant } from '../models/Ingrediant';
import { WitIngrediant } from '../models/factory/WitIngrediant';

import { SpeechRecognitionPage  } from '../pages/ServiceSpeechRecognition/SpeechRecognitionPage'
import { WitTest } from '../pages/witTest/witTest'

@NgModule({
  declarations: [
    MyApp,
    SpeechRecognitionPage,
    WitTest

  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeechRecognitionPage,
    WitTest

  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    WitAiService,
    Ingrediant,
    WitIngrediant
  ]
})
export class AppModule {}
