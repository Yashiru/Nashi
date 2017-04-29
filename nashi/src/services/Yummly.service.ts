import {Ingredient} from "../models/Ingredient";
import { Http, Headers, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'
//import {RecipeFactory} from '../models/factory/RecipeFactory';

@Injectable()
export class Yummly {
  private apiId = "2145c78a";
  private apiKey = "018b9abf9f3a796911b4209cb1fa83b4";

  constructor(private http: Http){

  }

  public getRecipeFromIngrediant(ingrediants: Ingredient[], callback: (res:Response) => void): void{
    let url = "http://api.yummly.com/v1/api/recipes?";

    for (let ing of ingrediants){
      let name: String;
      if(ing.name[ing.name.length] == "s")
      {
        name = ing.name.substr(0, (ing.name.length-1));
      }
      else{
        name = ing.name;
      }
      url += "allowedIngredient[]="+name+"&";
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+name);
    }

    let headers = new Headers({ 'X-Yummly-App-ID': this.apiId, 'X-Yummly-App-Key': this.apiKey});
    this.http.get(url, {headers: headers})
      .subscribe(
        function(response: any) {
          let globalJson: any = JSON.parse(response._body);
          let jsonRecipes: any = globalJson.matches;
          console.log(jsonRecipes);
          callback(jsonRecipes);
        }, //mapper le json dans un objet
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );

  }

  public getRecipeFromId(id: String, callback: (res:Response) => void): void{
    let url = "http://api.yummly.com/v1/api/recipe/"+id;

    let headers = new Headers({ 'X-Yummly-App-ID': this.apiId, 'X-Yummly-App-Key': this.apiKey});
    this.http.get(url, {headers: headers})
      .subscribe(
        function(response) { callback(response) }, //mapper le json dans un objet
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );

  }
}
