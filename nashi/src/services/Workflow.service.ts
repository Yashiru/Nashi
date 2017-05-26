import {Injectable} from "@angular/core";

@Injectable()
export class WorkflowService {
    private _witResponse: any;
    private _yummlyRecipes: any;
    private _yummlyRecipeToSay: any;

    constructor() {
    }

    getWitResponse(): any {
      return this._witResponse;
    }

    getYummlyRecipes(): any {
      return this._yummlyRecipes;
    }

    getYummlyRecipeToSay(): any {
      return this._yummlyRecipeToSay;
    }

    setWitResponse(value: any) {
      this._witResponse = value;
    }

    setYummlyRecipes(value: any) {
      this._yummlyRecipes = value;
    }

    setYummlyRecipeToSay(value: any) {
      this._yummlyRecipeToSay = value;
    }
}
