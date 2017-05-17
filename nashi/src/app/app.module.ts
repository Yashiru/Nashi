import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//pages
import { Home  } from '../pages/Home/Home'
//services
import { Yummly } from '../services/Yummly.service';
import { NashiBot } from '../services/NashiBot.service';

@NgModule({
  declarations: [
    MyApp,
    Home

  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home

  ],
  providers:
  [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NashiBot,
    Yummly,
  ]
})
export class AppModule {}
