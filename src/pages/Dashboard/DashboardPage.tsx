import React from 'react';
import DashBoardLayOut from "./templates/DashBoardLayOut";
import CountMolecules from "../../common/molecules/CountMolecules";
import {observer} from "mobx-react";
import {useQuery} from 'react-query'
import {useStores} from "../Context";



export const DashboardPage = observer(()=> {

    const {countStore} = useStores();

    const { data, error, status } = useQuery('test', countStore.fetchPosts)
    if (status === 'loading') {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {"test"}</p>
    }
    console.log("data : ",data)

    return (
        <DashBoardLayOut Count={countStore.count} Component={<CountMolecules add={()=>countStore.appendCount()} discount={()=>countStore.disCount()}/>}/>
    );
})