import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkflowService } from "../../services/Workflow.service";
import {Yummly} from "../../services/Yummly.service";


@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes-page.html'
})
export class RecipesPage {
  private recipes: any;

    constructor(public navCtrl: NavController, public workflowService: WorkflowService, public yummly: Yummly) {
      this.recipes = workflowService.getYummlyRecipes();
    }
}
