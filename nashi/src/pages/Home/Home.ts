import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Yummly } from '../../services/Yummly.service';
import { Ingredient } from '../../models/Ingredient';
import { Response } from '@angular/http';



@Component({
    selector: 'home',
    templateUrl: 'Home.html'
})
export class Home {
  
    constructor(public navCtrl: NavController, private yummly: Yummly) {

    }


}
