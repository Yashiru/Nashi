import { Injectable,  } from '@angular/core';
import { Http, Headers, Response, Jsonp, RequestOptions } from "@angular/http";

import { WitIngrediant } from '../models/factory/WitIngrediant';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Ingredient} from "../models/Ingredient";

@Injectable()
export class WitAiService {
  private accessToken: string = "KG36AZODU3ZIN4XAHAM5IS2ITPVWF6U5";

  public constructor(private http : Http, private witIngrediant: WitIngrediant){

  }

  public sayToBot(message : String, callback: (ingredients: Ingredient[]) => void): void{
    let url: string = "https://api.wit.ai/message?q=" + message + "&access_token=" + this.accessToken;
    let headers = new Headers({ 'Access-Control-Allow-Origin': ""});

    let options = new RequestOptions({ headers: headers });

    this.http.get(url, options).map(res => res.json()).subscribe(data => {
      callback(this.ingrediantFactorise(data));
    });

  }

  private ingrediantFactorise(jsonData: any): Ingredient[]{
    console.log(jsonData);

    let ing: Ingredient[] = this.witIngrediant.CreateIngrediants(jsonData);
    return ing;
  }

}
