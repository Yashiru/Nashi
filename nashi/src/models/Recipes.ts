import { Instructions } from './Instructions';
import { Ingredients } from './Ingredients';
import { Package } from './Package';

export class Recipes {
    ingredients: Ingredients[];
    instructions: Instructions[];
    name: String;
    calories: Number;
    time: Number;
    pack: Package;


    constructor(ingredients: Ingredients[], instructions: Instructions[], name: String, calories: Number, time: Number, pack: Package) {
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.name = name;
        this.calories = calories;
        this.time = time;
        this.pack = pack;
    }
}
