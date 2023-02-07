import {CounterStore} from "./Dashboard/modules/store/DashboardStore";

export class RootStore {
    countStore;

    constructor() {
        this.countStore = new CounterStore(this);
    }
}

// 각 페이지별 데이터는 각 페이지의 스토어에 저장 되나, 해당 스토어를 컨트롤 하는것을 전역으로 하여
// 개발에 편의를 높이고자 하여 rootStore 를 적용 합니다.
// 페이지별 스토어를 생성하고, 해당 스토어를 rootStore 에 연동 하여 주면 됩니다.