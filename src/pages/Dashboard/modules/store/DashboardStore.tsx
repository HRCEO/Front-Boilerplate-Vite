import { action, makeObservable, observable} from "mobx";

export class CounterStore {
    rootStore;
    count:any = 0;

    constructor(root:any) {
        makeObservable(this, {
            count: observable,
            appendCount: action,
            disCount: action
        })
        this.rootStore = root;
        this.count = 1
    }

    appendCount(){
        this.count ++;
    }

    disCount(){
        this.count--;
    }
};