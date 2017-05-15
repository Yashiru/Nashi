export class YummlyResponse {
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