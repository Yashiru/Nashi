import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YummlyResponse } from "../../models/YummlyResponse";

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes-page.html'
})
export class RecipesPage {
    constructor(public navCtrl: NavController) {
        let response = new YummlyResponse();
        response.getDatas();
    }
}
