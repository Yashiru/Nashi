import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from "../pages/home/home-page";
import { LoginPage } from '../pages/loginPage/login-page';
import {WorkflowService} from "../services/Workflow.service";


@Component({
  templateUrl: 'app.html',
  providers: [WorkflowService]
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform, public workflowService: WorkflowService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
