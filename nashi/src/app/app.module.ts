import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { LoginPage } from '../pages/loginPage/login-page';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/auth/user.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { NashiBot } from '../services/NashiBot.service';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}

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
    TextToSpeech,
    AuthService,
    UserService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule {}
