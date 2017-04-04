import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'circle-nashi',
  templateUrl: 'circle-nashi.html',

})
export class CircleNashi {
  public boolToEmit: boolean = true;
  public circleStyle: any = {
    fill: "transparent"
  };

  @Output()
  showedCart: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  cartComponents: String;

  constructor(public navCtrl: NavController){

  }

  public animate(): void{
    this.circleStyle = {
      'stroke-dasharray': "50%, 50%",
    };
  }

}

// this.showedCart.emit(this.boolToEmit);
