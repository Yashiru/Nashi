import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class Recipes {
  constructor(public navCtrl: NavController) {
  }
}
