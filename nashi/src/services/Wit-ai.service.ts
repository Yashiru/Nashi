import { Injectable,  } from '@angular/core';
import { Http, Headers, Response, Jsonp, RequestOptions } from "@angular/http";

import { WitIngrediant } from '../models/factory/WitIngrediant';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Ingredient} from "../models/Ingredient";

@Injectable()
export class WitAiService {

  public constructor(private http : Http, private witIngrediant: WitIngrediant){

  }

  public sayToBot(message : String, callback: (datas:any, ingredients: any) => void): void{
    let url: string = "http://leo-fasano.com/nashi/web/wit?message=" + message;
    let headers = new Headers({ 'Access-Control-Allow-Origin': "localhost:8100"});

    let options = new RequestOptions({ headers: headers });

    this.http.get(url).map(res => res.json()).subscribe(data => {
      var isRecipes: Boolean;
      if (data.ingredient) {
        isRecipes = false;
      }
      else{
        isRecipes = true;
      }

      callback(isRecipes, data);
    });

  }

}