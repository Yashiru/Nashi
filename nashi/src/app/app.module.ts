import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Recipes } from '../pages/recipes/recipes';
import { Recipe } from '../pages/recipe/recipe';
import { About } from '../pages/about/about';
import { CircleNashi } from '../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../component/textHelper/textHelper';

@NgModule({
  declarations: [
    MyApp,

    // Pages
    Home,
    About,
    Recipes,

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
    Home,
    About,
    Recipes
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
