  import { Ingredient } from '../Ingredient';

export class WitIngrediant{

  public CreateIngrediants(jsonIngrediant: any){
    var ingrediants = new Array();

    var obj : any;

    for(var i in jsonIngrediant){
      obj = jsonIngrediant[i];
      var ingrediant = new Ingredient();
      ingrediant.name = obj.value;
      ingrediant.accuracyPercentage = obj.confidence;

      if(obj.suggested != null && obj.suggested != undefined){
        ingrediant.suggested = obj.suggested;
      }

      ingrediants.push(ingrediant);
    }

    return ingrediants;
  }

}
