import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ingredient } from '../../models/Ingredient';
import { Response } from '@angular/http';
import { AuthService } from '../../services/auth/auth.service';
import { HomePage } from '../home/home-page';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, public auth: AuthService) {

    }

    public continueAsGuest(){
      this.navCtrl.push(HomePage);
    }


}
