import * as React from 'react';
import {RootStore} from "./RootStore";

export const StoreContext = React.createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;

export const useStores = () => React.useContext(StoreContext)

//  Context
//  RootStore를 사용하기 위하여, React Context 기능을 이용, 모듈화 합니다.