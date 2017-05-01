import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { LoginPage } from '../pages/loginPage/login-page';

import { NashiBot } from '../services/NashiBot.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,

  ],
  providers:
  [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NashiBot,
    TextToSpeech
  ]
})
export class AppModule {}
