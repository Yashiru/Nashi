import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Yummly} from "../../services/Yummly.service";
import { HomePage } from '../home/home-page';
import { LoginPage } from '../loginPage/login-page';
import { RecipeStepPage } from '../recipe-step/recipe-step-page';


@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes-page.html'
})
export class RecipesPage {
  private recipes: any[] = [];
  private urlNgStyle: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public yummly: Yummly) {
    let datas = this.navParams.get("recipes");
    let i = 0;
    for (let data of datas) {
      if (typeof data.picture_url !== 'undefined' && data.picture_url.toString() != '' ) {
        let datas: any = {
          "id": data.id,
          "name":  data.name,
          "url": data.picture_url
        };
        this.recipes.push(datas);
        i++;
      }
    }
  }

  goToRecipeDetail(id) {
      this.navCtrl.push(RecipeStepPage, {
        recipeId: id
      });
  }

  retour() {
    this.navCtrl.push(HomePage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
