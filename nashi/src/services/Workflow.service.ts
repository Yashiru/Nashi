import {Injectable} from "@angular/core";

@Injectable()
export class WorkflowService {
    private datas: any;

    constructor() {
    }

    getDatas(){
        return this.datas;
    }

    setDatas(datas) {
        this.datas = datas;
    }

}