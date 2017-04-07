import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'text-helper',
  templateUrl: 'text-helper.html',

})

export class TextHelper {
  public style: any;
  private displayedText: String = "";

  @Input()
  entryText: String;

  @Input()
  entrysText: String[];

  @Input()
  fontSize: String;

  constructor(public navCtrl: NavController){


  }

  ngOnInit() {
    this.style = {
      "font-size": this.fontSize,
    }


    if (this.entrysText != null){
      let i: number = 0;
      this.displayedText = this.entrysText[i];
      setInterval(() => {
        this.style = {
          "font-size": this.fontSize,
          "opacity": "0"
        }

        setTimeout(() => {
          this.displayedText = this.entrysText[i];
        }, 300);

        setTimeout(() => {
          this.style = {
            "font-size": this.fontSize,
            "opacity": "1"
          }
        }, 600);

        if(i < this.entrysText.length - 1){
          i++;
        }
        else{
          i=0;
        }

      }, 6500);
    }
  }

}

// this.showedCart.emit(this.boolToEmit);
