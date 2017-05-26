import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkflowService } from "../../services/Workflow.service";

@Component({
  selector: 'page-recipe-step',
  templateUrl: 'recipe-step-page.html'
})
export class RecipeStepPage {
    private recipe: any;
    constructor(public navCtrl: NavController) {
        let workflowService = new WorkflowService();
        this.recipe = workflowService.getYummlyRecipeToSay();
    }
}
