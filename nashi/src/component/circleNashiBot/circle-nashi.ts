import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextHelper } from '../textHelper/textHelper';

@Component({
  selector: 'circle-nashi',
  templateUrl: 'circle-nashi.html',

})
export class CircleNashi {
  @Input()
  entryText: String;

  @Input()
  entrysText: String[];

  @Input()
  fontSize: String;

  @Input()
  animation: String;
  public boolToEmit: boolean = true;
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
}

// this.showedCart.emit(this.boolToEmit);
