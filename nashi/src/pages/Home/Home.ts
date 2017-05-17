import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Yummly } from '../../services/Yummly.service';
import { Ingredient } from '../../models/Ingredient';
import { Response } from '@angular/http';



@Component({
    selector: 'home',
    templateUrl: 'Home.html'
})
export class Home {

  public yummlyResult: any;

    constructor(public navCtrl: NavController, private yummly: Yummly) {
      let ing1: Ingredient = new Ingredient("poivron", 1, "none");
      //let ing2: Ingredient = new Ingredient("crème", 1, "none");
      let ings: Ingredient[] = [];
      ings.push(ing1);
      yummly.getRecipesFromName("tartiflette", (res: any) => {
        console.log(res);
      });
    }


}
