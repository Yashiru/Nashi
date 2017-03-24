import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WitAiService } from '../../services/Wit-ai.service';

@Component({
    selector: 'wit-test',
    templateUrl: 'witTest.html'
})
export class WitTest {
    private message: String;

    constructor(public witService: WitAiService) {

    }

    public say(): void{
      this.witService.sayToBot(this.message);
    }

}
