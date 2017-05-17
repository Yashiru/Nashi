import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CircleNashi } from '../../component/circleNashiBot/circle-nashi';
import { TextHelper } from '../../component/textHelper/textHelper';
import { RecipesPage } from '../recipes/recipes-page';
import { RecipeStepPage } from '../recipe-step/recipe-step-page';
import { AboutPage } from '../about/about-page';
import { NashiBot } from '../../services/NashiBot.service';
import { Ingredient } from "../../models/Ingredient";
import { WorkflowService } from "../../services/Workflow.service";
import { Yummly } from "../../services/Yummly.service";
import { Platform } from 'ionic-angular';
import { Response } from '@angular/http';



declare var SpeechRecognition: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home-page.html'
})
export class HomePage {

  // var for component circle
  private fontSize = "16pt";
  private text = "";
  private texts = [
    "Hello",
    "What do you want",
    "to eat ?",
  ];
  private animation = "animListen";

  // var for component speechRecognition
  _zone: any;
  message: string;

  constructor(public navCtrl: NavController, _zone: NgZone, private bot: NashiBot, public yummly: Yummly, public platform: Platform) {
    this._zone = _zone;
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.bot.sayToBot(
        (msg: string): void => {
          this._zone.run(() => this.message = msg, this.animation = "animLoad" );
        },
        (isRecipe: Boolean, result: any): void => {
          let workflowService = new WorkflowService();
            if (isRecipe) {

                this.yummly.getRecipesFromName(JSON.parse(result).recipe[0].value, (res:Response, goToSteps: boolean) => {
                  workflowService.yummlyRecipes(res);

                  if(!goToSteps)
                  {
                    this.navCtrl.push(RecipesPage);
                  }
                  else{
                    this.navCtrl.push(RecipeStepPage);
                  }
                });

            } else {
                let ingredients: Ingredient[] = [];
                for (let ing of result.ingredient) {
                  var i = new Ingredient(ing.value);
                  ingredients.push(i);
                }
                this.yummly.getRecipeFromIngrediant(ingredients, (res: any) => {
                    workflowService.yummlyRecipes(res);
                    this.navCtrl.push(RecipesPage);
                });
            }
        }
      );
    });
  }

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }
}
