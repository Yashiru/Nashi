export class Ingredient {

    name: String;
    quantity: Number;
    unit: String;

    constructor(name: String, quantity?: Number, unit?: String) {
        this.name = name;
        if(quantity != null)
          this.quantity = quantity;
        if(unit != null)
          this.unit = unit;
    }
}
