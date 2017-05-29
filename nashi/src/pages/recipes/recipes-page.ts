import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Yummly} from "../../services/Yummly.service";


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
    for (let data of datas.resources) {
      console.log('------');
      console.log(data.picture_url);
      if (typeof data.picture_url !== 'undefined' && data.picture_url.toString() != '' ) {
        let url: any = "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg";
        let datas: any = {
          "name":  data.name,
          "url": data.picture_url
        };
        this.recipes.push(datas);
        i++;
      }
    }
  }
}
