import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkflowService } from "../../services/Workflow.service";

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes-page.html'
})
export class RecipesPage {
    constructor(public navCtrl: NavController) {
        let response = new WorkflowService();
        response.getDatas();
    }
}
