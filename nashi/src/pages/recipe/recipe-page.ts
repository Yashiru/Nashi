import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YummlyResponse } from "../../models/YummlyResponse";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe-page.html'
})
export class RecipePage {
    constructor(public navCtrl: NavController) {
        let response = new YummlyResponse();
        response.getDatas();
    }
}
