import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextHelper } from '../textHelper/textHelper';
import {Observable} from "rxjs";

@Component({
  selector: 'circle-nashi-steps',
  templateUrl: 'circle-nashi-steps.html',

})
export class CircleNashiSteps {

  @Input()
  animation: String;

  @Input()
  steps: any;

  public fontSize = "16pt";
  public actualstep: number = 0;
  public fowardDisabled: boolean = false;
  public backDisabled: boolean = true;
  public boolToEmit: boolean = true;
  private stepsString: string;
  private stepText: string = "";
  private JSON: any = JSON;
  public circleStyle: any = {
    fill: "transparent",
    opacity: "0",
    "stroke-dashoffset": "-68%",
    "transition-timing-function": "linear",
    transition: "opacity 1s steps(1, start), stroke-dashoffset 1.3s"
  };
  public startStyle: any = {
    fill: "transparent"
  };
  public stop: Boolean;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    if(this.steps != null)
    {
      this.stepsString = this.steps[this.actualstep];
    }

  }

  ngOnInit() {
    setTimeout(() => {
      this.animate();
    }, 500);
  }

  ngOnChanges()
  {
      setTimeout(() => {
        this.animate();
      }, 500);
  }
  public animate(): void {
    setTimeout(() => {
      this.circleStyle = {
        fill: "transparent",
        opacity: "1",
        "transition-timing-function": "linear",
        transition: "opacity 1s steps(1, start), stroke-dashoffset 1.3s",
        "animation-name": this.animation,

      };

    }, 850);
    this.startStyle = {
      'stroke-dasharray': "2%, 208%",
      "stroke-dashoffset": "-68%"
    };
  }

  private changeStep(isNext: boolean): void{
    if(isNext){
      if(this.actualstep == 0){
        this.backDisabled = false;
      }
      if(this.actualstep == this.steps.length - 2){
        this.fowardDisabled = true;
      }
      this.actualstep += 1;
    }
    else{
      if(this.actualstep == 1){
        this.backDisabled = true;
      }
      if(this.actualstep == this.steps.length){
        this.fowardDisabled = false;
      }
      this.actualstep -= 1;
    }
  }
}

// this.showedCart.emit(this.boolToEmit);
