import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Yummly } from '../services/Yummly.service';
import { HomePage  } from '../pages/home/home-page'
import { RecipesPage  } from '../pages/recipes/recipes-page'
import { RecipeStepPage  } from '../pages/recipe-step/recipe-step-page'
import { AboutPage  } from '../pages/about/about-page'
import { TextToSpeech } from 'ionic-native';
import { CircleNashi } from '../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../component/textHelper/textHelper';
import { LoginPage } from '../pages/loginPage/login-page';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/auth/user.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { NashiBot } from '../services/NashiBot.service';
import { WitAiService } from '../services/Wit-ai.service';
import { WorkflowService } from "../services/Workflow.service";
import { Ingredient } from '../models/Ingredient';
import { WitIngrediant } from '../models/factory/WitIngrediant';

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
    // Pages
    HomePage,
    RecipesPage,
    RecipeStepPage,
    AboutPage,
    LoginPage,

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
    HomePage,
    RecipesPage,
    RecipeStepPage,
    AboutPage,
    LoginPage,

    // Components
    CircleNashi,
    TextHelper
  ],
  providers:
  [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    NashiBot,
    TextToSpeech,
    Yummly,
    WitAiService,
    WorkflowService,
    Ingredient,
    AuthService,
    UserService,
    WitIngrediant,
  ]
})
export class AppModule {}
