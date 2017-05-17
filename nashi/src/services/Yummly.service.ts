import {Ingredient} from "../models/Ingredient";
import { Http, Headers, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'
//import {RecipeFactory} from '../models/factory/RecipeFactory';

@Injectable()
export class Yummly {
  private token = "Bearer qFS9q2cQ4h4ijNQVBRihvQ";

  constructor(private http: Http){

  }

  public getRecipeFromIngrediant(ingrediants: Ingredient[], callback: (res:any) => void): void{
    let searchRecipeUrl = "https://www.wecook.fr/web-api/recipes/search?";
    var with_is = "[";

    var i = 0;

    for (let ing of ingrediants){
      this.getIngerdiantIdFromName(ing.name, (idIng: number) => {
        if(i < ingrediants.length - 1)
        {
          with_is += idIng+",";
        }
        else{
          with_is += idIng+",";
          with_is = with_is.substr(0, with_is.length-1);
          with_is += "]";
          searchRecipeUrl += "with_is="+with_is;

          let headers = new Headers({ 'Authorization': this.token, 'Wecook-Version': '1'});
          this.http.get(searchRecipeUrl, {headers: headers})
            .subscribe(
              function(response: Response) { callback(response['_body']) }, //mapper le json dans un objet
              function(error) { console.log("Error happened" + error)},
              function() { console.log("the subscription is completed")}
            );
        }
        i++;
      });
    }
  }

  public getRecipesFromName(name: String, callback: (res:Response) => void): void{
    let searchRecipeUrl = "https://www.wecook.fr/web-api/recipes/search?q="+name;

    let headers = new Headers({ 'Authorization': this.token, 'Wecook-Version': '1'});
    this.http.get(searchRecipeUrl, {headers: headers})
      .subscribe(
        function(response) { callback(response["_body"]) }, //mapper le json dans un objet
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );

  }

  public getIngerdiantIdFromName(name: String, callback: (idIng: number) => void): void{

    if(name[name.length - 1] == "s")
    {
      name = name.substr(0, name.length -1);
      console.log(name);
    }

    let getIdUrl = "https://www.wecook.fr/web-api/resources/autocomplete?q="+name+"&type=ingredient";
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Authorization': this.token, 'Wecook-Version': '1'});
    var idToReturn: number;

    this.http.get(getIdUrl, {headers: headers})
      .subscribe(
        function(response) {
          var res = JSON.parse(response["_body"]);
          if(res.result.ingredient.length > 0){
            for (let ing of res.result.ingredient){
              if(ing.name == name){
                idToReturn = ing.entity_id;
              }
            }

            callback(idToReturn);
          }
        }, //mapper le json dans un objet
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );

  }
}
