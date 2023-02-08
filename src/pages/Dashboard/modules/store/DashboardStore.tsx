import { action, makeObservable, observable} from "mobx";

export class CounterStore {
    rootStore;
    count:any = 0;

    constructor(root:any) {
        makeObservable(this, {
            count: observable,
            appendCount: action,
            disCount: action,
            fetchPosts: action
        })
        this.rootStore = root;
        this.count = 1
    }

    async fetchPosts() {
        const response = await fetch(
            "https://api.chucknorris.io/jokes/random"
        );
        return response.json();
    }

    appendCount(){
        this.count ++;
    }

    disCount(){
        this.count--;
    }
};