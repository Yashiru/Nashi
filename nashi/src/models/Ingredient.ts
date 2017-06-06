import {Inject} from "@angular/core";
export class Ingredient {

    private _name: String;
    private _quantity: number;
    private _unit: String;
    private _suggested: any;
    private _accuracyPercentage: number;

    constructor() {
    }

  //SETTERS
  public setName(value: String): any {
    this._name = value;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  set unit(value: String) {
    this._unit = value;
  }

  set suggested(value: any) {
    this._suggested = value;
  }

  set accuracyPercentage(value: number) {
    this._accuracyPercentage = value;
  }

  //GETTERS
  get name(): String {
    return this._name;
  }

  get quantity(): number {
    return this._quantity;
  }

  get unit(): String {
    return this._unit;
  }

  get suggested(): any {
    return this._suggested;
  }

  get accuracyPercentage(): number {
    return this._accuracyPercentage;
  }
}
