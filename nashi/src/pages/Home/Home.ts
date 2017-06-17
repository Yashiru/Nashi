import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeCook } from '../../services/WeCook.service';
import { Ingredient } from '../../models/Ingredient';
import { Response } from '@angular/http';



@Component({
    selector: 'home',
    templateUrl: 'Home.html'
})
export class Home {

    constructor(public navCtrl: NavController, private weCook: WeCook) {
      var recipes: string = "";
      weCook.logAllRecipes((res: string, tab: number[]) => {
        if(tab.length == 1) {
          recipes = recipes + res;
          console.log(recipes);
        }
        else {
          recipes = recipes + res;
        }
      })
    }


}
