import { Injectable,  } from '@angular/core';
import { Http, Headers, Response, Jsonp, RequestOptions } from "@angular/http";

import { WitIngrediant } from '../models/factory/WitIngrediant';

import { Ingrediant } from '../models/Ingrediant';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WitAiService {
  private accessToken: string = "KG36AZODU3ZIN4XAHAM5IS2ITPVWF6U5";

  public constructor(private http : Http, private witIngrediant: WitIngrediant){

  }

  public sayToBot(message : String): void{
    let url: string = "https://api.wit.ai/message?q=" + message + "&access_token=" + this.accessToken;
    let headers = new Headers({ 'Access-Control-Allow-Origin': ""});

    let options = new RequestOptions({ headers: headers });

    this.http.get(url, options).map(res => res.json()).subscribe(data => {
      console.log(this.ingrediantFactorise(data));
    });

  }

  private ingrediantFactorise(jsonData: any): Ingrediant[]{
    console.log(jsonData);

    let ing: Ingrediant[] = this.witIngrediant.CreateIngrediants(jsonData);
    return ing;
  }

}
