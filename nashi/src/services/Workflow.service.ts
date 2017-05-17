import {Injectable} from "@angular/core";

@Injectable()
export class WorkflowService {
    private _witResponse: any;
    private _yummlyRecipes: any;

    constructor() {
    }

    get witResponse(): any {
      return this._witResponse;
    }

    get yummlyRecipes(): any {
      return this._yummlyRecipes;
    }

    set witResponse(value: any) {
      this._witResponse = value;
    }

    set yummlyRecipes(value: any) {
      this._yummlyRecipes = value;
    }
}
