import React from 'react';
import DashBoardLayOut from "./templates/DashBoardLayOut";
import CountMolecules from "../../common/molecules/CountMolecules";
import {observer} from "mobx-react";
import {useStores} from "../Context";

export const DashboardPage = observer(()=> {

    const {countStore} = useStores();

    return (
        <DashBoardLayOut Count={countStore.count} Component={<CountMolecules add={()=>countStore.appendCount()} discount={()=>countStore.disCount()}/>}/>
    );
})