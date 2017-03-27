import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SpeechRecognitionPage  } from '../pages/ServiceSpeechRecognition/SpeechRecognitionPage'

@NgModule({
  declarations: [
    MyApp,
    SpeechRecognitionPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeechRecognitionPage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
