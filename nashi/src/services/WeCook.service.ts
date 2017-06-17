import {Ingredient} from "../models/Ingredient";
import { Http, Headers, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'
//import {RecipeFactory} from '../models/factory/RecipeFactory';

@Injectable()
export class WeCook {
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

  public logAllRecipes(callback: (res: string, tab: number[])=>void): void{
    let searchRecipeUrl = "https://www.wecook.fr/web-api/recipes/search?id=";
    let headers = new Headers({ 'Authorization': this.token, 'Wecook-Version': '1'});
    //let maxId = 9516;
    var minId: number = 101;
    var maxId: number = 110;
    var possibleIds: number[] = [];

    for (let i = 0; i < maxId-minId; i++)
    {
      possibleIds.push(minId+i);
    }
    console.log("-----------"+possibleIds.length+"----------");

    while(possibleIds.length > 0)
    {
      var idTab = Math.round(Math.random() * (possibleIds.length - 1));
      this.http.get(searchRecipeUrl+possibleIds[idTab], {headers: headers})
        .subscribe(
          function(response) {
            let tabRecette = JSON.parse(response["_body"]).result.resources;
            let recette = tabRecette[0];
            if(recette != null){
                callback(recette, possibleIds)
            }
            else{
              response = JSON.parse(response["_body"]).result.resources;
              console.log("\n/!\\/!\\/!\\/!\\ERROR/!\\/!\\/!\\/!\\\n"+JSON.stringify(response[0])+"\n\n" +
                "--- "+ possibleIds.length +" ---\n");
            }

          }, //mapper le json dans un objet
          function(error) { console.log("Error happened" + error)},
          function() { console.log("the subscription is completed")}
        );
      possibleIds.splice(idTab, 1)
    }

  }

  public getRecipesFromName(name: String, callback: (res:Response, goToSteps: boolean) => void): void{
    let searchRecipeUrl = "https://www.wecook.fr/web-api/recipes/search?q="+name;
    let goToSteps: boolean = false;
    let headers = new Headers({ 'Authorization': this.token, 'Wecook-Version': '1'});
    this.http.get(searchRecipeUrl, {headers: headers })
      .subscribe(
        function(response) {
          let recipe = JSON.parse(response["_body"]).result.resources;
          if(JSON.parse(response["_body"]).result.resources.length == 1)
          {
            goToSteps = true;
          }
          callback(recipe, goToSteps);
        }, //mapper le json dans un objet
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );

  }

  public getIngerdiantIdFromName(name: String, callback: (idIng: number) => void): void{

    if(name[name.length - 1] == "s")
    {
      name = name.substr(0, name.length -1);
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

  public getFullRecipe(recipeId: number, callback:(res:Response) => void)
  {
      let searchRecipeUrl = "https://www.wecook.fr/web-api/recipes?id="+recipeId;
    let headers = new Headers({ 'Authorization': this.token, 'Wecook-Version': '1'});
    this.http.get(searchRecipeUrl, {headers: headers})
      .subscribe(
        function(response) {
          console.log("\n\n\n\nRetour de wecook ID "+recipeId+" :"+JSON.stringify(response)+"\n\n\n\n");
          callback(response);
        }, //mapper le json dans un objet
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );

  }
}
