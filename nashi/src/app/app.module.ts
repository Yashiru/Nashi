import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { CircleNashi } from '../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../component/textHelper/textHelper';

@NgModule({
  declarations: [
    MyApp,

    // Pages
    Home,

    // components
    CircleNashi,
    TextHelper
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
