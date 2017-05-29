import {Component, NgZone} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkflowService } from "../../services/Workflow.service";
import { Response } from '@angular/http';
import {Yummly} from "../../services/Yummly.service";
import { CircleNashiSteps } from "../../component/circleNashiBotStepsPage/circle-nashi-steps";


@Component({
  selector: 'page-recipe-step',
  templateUrl: 'recipe-step-page.html'
})

export class RecipeStepPage {
  private recipeId: any;
  private recipeToSay: any = {"name":""};
  private steps: any = [];
  private timers: any = [];
  public text: string = "chauffer les patates magle";
  public animation: string ="animListen";
  public actualStep: number = 1;
  public stepText: string = "chquffer les potaite";

  constructor(public navCtrl: NavController, private _zone: NgZone, public navParams: NavParams, public workflowService: WorkflowService, public yummly: Yummly) {
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
      //tts.say("le minuteur "+this.timers[indexTimer].reason+" est terminé");
    }); }, 1000);
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
        callback(this.timers.indexOf(timer));
      }
    }
  }

}


