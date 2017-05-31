import {Component, NgZone} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkflowService } from "../../services/Workflow.service";
import { Response } from '@angular/http';
import {Yummly} from "../../services/Yummly.service";
import {NashiBot} from "../../services/NashiBot.service";
import {HomePage} from "../home/home-page";


@Component({
  selector: 'page-recipe-step',
  templateUrl: 'recipe-step-page.html'
})


export class RecipeStepPage {
  private recipeId: any;
  private recipeToSay: any = {"name":""};
  private steps: any = [];
  private timers: any = [];
  public micColor: any = {
    "color": "color($colors, inactive-color, base)",
  };
  public animation: string ="animListen";
  public actualStep: number = 0;
  public stepText: string = "";
  private text: string = "Cliquez pour ajouter un minuteur";
  private fowardDisabled: boolean = false;
  private backDisabled: boolean = true;

  constructor(private bot: NashiBot, public navCtrl: NavController, private _zone: NgZone, public navParams: NavParams, public workflowService: WorkflowService, public yummly: Yummly) {
    this.recipeId = this.navParams.get("recipeId");
    yummly.getFullRecipe(this.recipeId, (res: Response) => {
      let data = JSON.parse(res["_body"]);
      this._zone.run(() => {
        this.recipeToSay = data.result[0];
        this.steps = this.recipeToSay.steps;
      });
      this.stepText = data.result[0].steps[this.actualStep].step;
    });

    setInterval(() => { this.decrementTimer((indexTimer) => {
      this.bot.speek("le minuteur pour"+this.timers[indexTimer].reason+" est terminé");
    }); }, 1000);

    //this.bot.speek("Voici les étapes de préparation de la recette");
  }

  private addTimer(): void{
    this.changeMicColor({
      "color": "color($colors, primary, base)",
      "animation-name": "animListeningMic",
      "font-size": "3rem"
    });
    this.text = "";

    this.bot.sayToBot(
      (): void => {
      },
      (msg: string): void => {
        this._zone.run(() => {
          this.text = "Ajout du minuteur ...";
        });
        this.changeMicColor({"color": "color($colors, inactive-mic, base)"});
      },
      (isRecipe: Boolean, result: any, isTimer: boolean): void => {
        if (isTimer) {
          let mostValuableAmount: number = result.timerAmount[0].value;
          let lessValuableAmount: number;
          if(result.timerAmount[1] != null)
          {
            lessValuableAmount = result.timerAmount[1].value;
          }
          else
          {
            lessValuableAmount = 0;
          }

          this.timers.push({
            "reason": "",
            "timerMinutesAmount": mostValuableAmount,
            "timerSecondesAmount": lessValuableAmount,
            "ended": "false"
          });
        }
        else {
          this.text = "Cliquez pour ajouter un minuteur";
          this.bot.speek("je n'ais pas compris");
        }
      }
    );

  }

  private decrementTimer(callback: (index: number) => void){
    for(let timer of this.timers)
    {
      if(timer.timerSecondesAmount == 0 && timer.timerMinutesAmount > 0)
      {
        this._zone.run(() => {
          timer.timerMinutesAmount -= 1;
          timer.timerSecondesAmount = 59;
        });
      }
      else if (timer.timerSecondesAmount > 0){
        this._zone.run(() => {
          timer.timerSecondesAmount -= 1;
        });
      }
      else {
        if(!timer.ended)
        {
          callback(this.timers.indexOf(timer));
        }
        timer.ended = true;
      }
    }
  }

  public nextStep(){
    if(this.actualStep < this.recipeToSay.steps.length-1){
      this.stepText = this.recipeToSay.steps[this.actualStep].step;
      this.fowardDisabled = false;
      this.backDisabled = false;
    }
    else{
      this.fowardDisabled = true;
      this.backDisabled = false;
      // FIN DU PROCESS
    }
    this.actualStep += 1;
  }

  public previousStep() {
    this.stepText = "";
    if(this.actualStep > 1){
      this._zone.run(() => {
        this.stepText = this.recipeToSay.steps[this.actualStep].step;
        this.backDisabled = false;
        this.fowardDisabled = false;

      });
    }
    else{
      this._zone.run(() => {
        this.backDisabled = true;
        this.fowardDisabled = false;

      });
    }
    this.actualStep -= 1;
  }

  public backToPreviousView(){
    this.navCtrl.push(HomePage);
  }


  private changeMicColor(color: any){
    this.micColor = color;
  }

}


