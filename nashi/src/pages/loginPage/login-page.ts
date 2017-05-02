import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ingredient } from '../../models/Ingredient';
import { Response } from '@angular/http';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, public auth: AuthService) {

    }


}
