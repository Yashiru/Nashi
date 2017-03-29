import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';
import { Package } from './Package';

export class Recipe {
    ingredients: Ingredient[];
    instructions: Instruction[];
    name: String;
    calories: Number;
    time: Number;
    pack: Package;


    constructor(ingredients: Ingredient[], instructions: Instruction[], name: String, calories: Number, time: Number, pack: Package) {
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.name = name;
        this.calories = calories;
        this.time = time;
        this.pack = pack;
    }
}
