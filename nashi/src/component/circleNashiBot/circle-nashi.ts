import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'circle-nashi',
  templateUrl: 'circle-nashi.html',

})
export class CircleNashi {
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
  public stop:Boolean;

  @Output()
  showedCart: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  cartComponents: String;

  constructor(public navCtrl: NavController){

  }

  public animate(): void{
    if(this.stop === false){
      this.stop = true;
    }
    else if(this.stop){
      this.stop = false;
    }
    else{
      this.stop = true;
    }
    setTimeout(() => {
      this.lunchCircle();// demarrer une annimation infini a la place
      
    }, 860);


    this.startStyle = {
      'stroke-dasharray': "2%, 208%",
      "stroke-dashoffset": "-68%"
    };
  }

  public lunchCircle(){
    let offset = 68;
    console.log(this.stop);
    while(this.stop)
    {
      setTimeout(() =>{
        this.circleStyle = {
          "opacity": "1",
          "stroke-dashoffset": offset+"%"
        };
      }, 200)
    }
  }

}

// this.showedCart.emit(this.boolToEmit);
