import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Yummly } from '../services/Yummly.service';
import { Home  } from '../pages/home/home'
import { Recipes  } from '../pages/recipes/recipes'
import { About  } from '../pages/about/about'
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { CircleNashi } from '../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../component/textHelper/textHelper';
import { NashiBot } from '../services/NashiBot.service';
import { WitAiService } from '../services/Wit-ai.service';
import { Ingredient } from '../models/Ingredient';
import { WitIngrediant } from '../models/factory/WitIngrediant';

@NgModule({
  declarations: [
    MyApp,
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
    TextToSpeech,
    Yummly,
    WitAiService,
    Ingredient,
    WitIngrediant

  ],
})
export class AppModule {}
