  import { Ingredient } from '../Ingredient';

export class WitIngrediant{

  public CreateIngrediants(jsonIngrediant: any){
    var ingrediants = new Array();

    var obj : any;

    jsonIngrediant = jsonIngrediant.ingredient;

    for(var i in jsonIngrediant){
      var ingrediant = new Ingredient();
      ingrediant.name = jsonIngrediant[i].value;
      ingrediant.accuracyPercentage = jsonIngrediant[i].confidence;

      ingrediants.push(ingrediant);
    }
    console.log(ingrediants);

    return ingrediants;
  }

}
