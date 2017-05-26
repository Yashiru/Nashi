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
    "Quels ingrédients avez-vous ?",
    "Une recette en particulier ?",
    "Que voulez vous cuisiner ?",
  ];
  private animation = "animListen";
  public micColor: any = {
    "color": "color($colors, inactive-color, base)",
  };

  // var for component speechRecognition
  _zone: any;
  message: string;

  constructor(public navCtrl: NavController, _zone: NgZone, private bot: NashiBot, public yummly: Yummly, public platform: Platform) {
    this._zone = _zone;
    this.navCtrl = navCtrl;
  }

  private changeMicColor(color: any){
    this.micColor = color;
  }

  ionViewDidLoad() {
    this.launchRecordProcess();
  }

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }

  private launchRecordProcess() {
    this.texts = [
      "Quels ingrédients avez-vous ?",
      "Une recette en particulier ?",
      "Que voulez vous cuisiner ?",
    ];
    this.changeMicColor({"color": "color($colors, inactive-mic, base)"});
    let nav = this.navCtrl;
    this.platform.ready().then(() => {
      this.bot.sayToBot(
        () :  void => {
          this.changeMicColor({"color": "color($colors, primary, base)", "animation-name": "animListeningMic", "font-size": "3rem"});
        },
        (msg: string): void => {
          this._zone.run(() => {
            this.message = msg;
            this.animation = "animLoad";
            this.texts = [
              "...",
              "Recherche en cours ...",
              "Analyse en cours ...",
            ];
          } );
          this.changeMicColor({"color": "color($colors, inactive-mic, base)"});
        },
        (isRecipe: Boolean, result: any): void => {
          let workflowService = new WorkflowService();
          if (isRecipe == true) {

            this.yummly.getRecipesFromName(JSON.parse(result).recipe[0].value, (res:Response, goToSteps: boolean) => {
              workflowService.setYummlyRecipes(res);

              if(!goToSteps)
              {
                nav.push(RecipesPage);
              }
              else{
                nav.push(RecipeStepPage);
              }
            });

          } else if (isRecipe == false){
            console.log("\n\n\n\n\n\n");
            let ingredients: Ingredient[] = [];
            for (let ing of result.ingredient) {
              var i = new Ingredient();
              var iName: String = ing.value;
              i.setName(iName);
              ingredients.push(i);
              console.log(i.name+"\n");
            }
            console.log("\n\n\n\n\n\n");
            this.yummly.getRecipeFromIngrediant(ingredients, (res: any) => {
              workflowService.setYummlyRecipes(res);
              console.log("return from wecook : \nx"+res);

              nav.push(RecipesPage);
            });
            console.log("\n\n\n\n\n\n");
          }
          else{
            //je n'ai pas compris ce que vous voulez
          }
        }
      );
    });
  }
}






