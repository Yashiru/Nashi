import { Storage } from '@ionic/storage';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class UserService {
  constructor(private http: Http){

  }


  public postUserConnected(user: any, token: any): void{
    let url = "http://leo-fasano.com/nashi/web/user/post/";
    console.log(user);

    let body: any = {
      "email": user.email,
      "token": token,
      "firstname": user.given_name || user.name,
      "lastname": user.family_name || user.nickname
    };

    let headers = new Headers({ "Content-Type": "application/json" });
    this.http.post(url, JSON.stringify(body), {headers: headers})
      .subscribe(
        function(response) { console.log(response); },
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );
  }
}
